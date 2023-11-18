import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

import { connMock, jwtSeviceMock, mailerServiceMock } from 'test/mocks';

describe('AuthService', () => {
	let service: AuthService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [AuthService, connMock, jwtSeviceMock, mailerServiceMock],
		}).compile();

		service = module.get<AuthService>(AuthService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
