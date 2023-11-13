import { IAddress } from 'src/types/interfacies/adress.interfece';
import { IUser } from '../repository/user.interface';
import { IsArray, IsBoolean, IsEmail, IsNumber, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDTO implements IUser, IAddress {
	@IsString()
	name: string;

	@IsString()
	cpf: string;

	@IsEmail()
	email: string;

	@IsString()
	phone: string;

	@IsStrongPassword({ minLength: 6 })
	password: string;

	@IsNumber()
	profileId: number;

	@IsBoolean()
	active?: boolean;

	@IsString()
	zipCode: string;

	@IsString()
	street: string;

	@IsNumber()
	number?: number;

	@IsString()
	complement?: string;

	@IsString()
	district: string;

	@IsString()
	city: string;

	@IsString()
	state: string;

	@IsArray()
	@IsNumber()
	rules: number[];
}
