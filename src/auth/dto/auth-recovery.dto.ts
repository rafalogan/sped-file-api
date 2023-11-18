import { IsEmail, IsJWT, IsStrongPassword } from 'class-validator';

export class AuthRecoveryDTO {
	@IsJWT()
	token: string;

	@IsStrongPassword({ minLength: 6 })
	password: string;
}
