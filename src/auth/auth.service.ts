import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Knex } from 'knex';

import { MailerService } from '@nestjs-modules/mailer';
import { InjectKnex } from 'nestjs-knex';
import { AuthSiginDTO } from './dto/auth-signin.dto';
import { async } from 'rxjs';
import { UserEntity } from 'src/user/repository/user.entity';
import { existsOrError, notExistisOrError } from 'src/utils/validate.handle';
import { UserViewModel } from 'src/user/repository/user-view.model';
import { compare } from 'bcrypt';
import { convertDataValues, hashString, onError } from 'src/utils';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { AuthRecoveryDTO } from './dto/auth-recovery.dto';

@Injectable()
export class AuthService {
	private authentication = { audience: 'signin', issuer: 'user' };
	private recoveryOptions = { audience: 'recovery', issuer: 'forget' };

	constructor(
		@InjectKnex() private readonly conn: Knex,
		private readonly jwtService: JwtService,
		private readonly mailerService: MailerService,
	) {}

	varifyToken(token: string) {
		try {
			return this.jwtService.verify(token, this.authentication);
		} catch (err: any) {
			throw new BadRequestException(err);
		}
	}

	async signin(credentials: AuthSiginDTO) {
		const { email, password } = credentials;

		const fromDB = await this.findOneByEmail(email);

		existsOrError(fromDB, new UnauthorizedException('user unauthorized. verify your email or password and try aigate again'));
		existsOrError(!!fromDB?.active, new UnauthorizedException('User Unauthorized!'));

		const isMatch = await compare(password, fromDB?.password);
		existsOrError(isMatch, new UnauthorizedException('user unauthorized. verify your email or password and try aigate again'));

		return this.generateToken(new UserViewModel(fromDB));
	}

	async signup(user: AuthSignupDTO) {
		try {
			const fromDB = await this.conn('user').where('email', user.email).first();

			notExistisOrError(fromDB, new ForbiddenException('user e-mail already existis.'));

			const { id: profileId } = await this.conn('profiles').where('key', 'user').first();
			const password = await hashString(user.password);

			const toSave = new UserEntity({ ...user, profileId, password });
			const [{ id }] = await this.conn('users').insert(convertDataValues(toSave)).returning('id');

			existsOrError(Number(id), new InternalServerErrorException(id));
			await this.saveRules(id, user.rules);

			const payload = await this.findOneByEmail(user.email);

			return this.generateToken(new UserViewModel(payload));
		} catch (err: any) {
			onError(AuthService.name, err);
			return err;
		}
	}

	async forget(email: string) {
		try {
			const fromDB = await this.findOneByEmail(email);

			existsOrError(fromDB, new NotFoundException('user email not found'));

			const { id, name } = fromDB;

			const token = this.jwtService.sign(
				{ id, email },
				{
					expiresIn: '30 minutes',
					subject: String(id),
					...this.recoveryOptions,
				},
			);

			await this.mailerService.sendMail({
				subject: 'Recuperar Senha',
				to: email,
				template: 'forget',
				context: { name, token },
			});

			return {
				message: 'email to recovery password send',
				data: { name, email, token },
			};
		} catch (err: any) {
			onError(AuthService.name, err);
			return err;
		}
	}

	async recovery(data: AuthRecoveryDTO) {}

	private async generateToken(user: UserViewModel) {
		Reflect.deleteProperty(user, 'password');
		Reflect.deleteProperty(user, 'active');

		const accessToken = this.jwtService.sign(
			{ ...user },
			{
				expiresIn: '1 day',
				subject: String(user.id),
				...this.authentication,
			},
		);

		return { ...user, accessToken };
	}

	private async saveRules(userId: number, rules: number[]) {
		try {
			for (const ruleId of rules) {
				await this.conn('users_rules').insert(convertDataValues({ userId, ruleId }));
			}
		} catch (err: any) {
			onError(AuthService.name, err);
			throw new InternalServerErrorException(err);
		}
	}

	private async findOneByEmail(email: string) {
		try {
			const fromDB = await this.conn({ u: 'user', p: 'profiles' })
				.select(
					{
						id: 'u.id',
						name: 'u.name',
						cpf: 'u.cpf',
						email: 'u.email',
						phone: 'u.phone',
						password: 'u.password',
						profile_id: 'u.profile_id',
						active: 'u.active',
					},
					{ profile: 'p.profile' },
				)
				.where('u.email', email)
				.andWhereRaw('p.id = u.profile_id')
				.first();

			if (!fromDB) {
				return fromDB;
			}

			const rules = await this.conn({ ur: 'users_rules', r: 'rules' })
				.select({ id: 'r.id', rule: 'r.rule', key: 'r.key' })
				.where('ur.user_id', fromDB?.id)
				.andWhereRaw('r.id = ur.rule_id');

			return convertDataValues({ ...fromDB, rules }, 'camel');
		} catch (err: any) {
			onError(AuthService.name, err);
			return err;
		}
	}
}
