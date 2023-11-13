import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from 'src/config/auth/jwt.confg';

@Module({
	imports: [JwtModule.register(jwtOptions)],
	providers: [AuthService],
	exports: [AuthService],
})
export class AuthModule {}
