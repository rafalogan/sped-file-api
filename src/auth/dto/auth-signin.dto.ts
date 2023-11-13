import { IsEmail, IsString } from 'class-validator';

export class AuthSiginDTO {
	@IsEmail()
	email: string;

	@IsString()
	password: string;
}
