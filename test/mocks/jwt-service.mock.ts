import { JwtService } from '@nestjs/jwt';

export const jwtSeviceMock = {
	provide: JwtService,
	useValue: {
		verify: jest.fn(),
		sign: jest.fn(),
	},
};
