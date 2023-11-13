import { IsEmail, IsJWT } from 'class-validator';

export class AuthRecoveryDTO {
	@IsEmail()
	email: string;

	@IsJWT()
	token: string;
}
