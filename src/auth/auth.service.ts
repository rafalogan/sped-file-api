import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Knex } from 'knex';

import { MailerService } from '@nestjs-modules/mailer';
import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class AuthService {
	private authentication = { audience: 'signin', issuer: 'user' };
	private recoveryOptions = { audience: 'recovery', issuer: 'user' };

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
}
