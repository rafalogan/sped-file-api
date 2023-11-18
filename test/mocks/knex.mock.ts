import { Knex } from 'knex';
import { InjectKnex } from 'nestjs-knex';
// import { Knex } from 'nestjs-knex';

export const connMock = {
	token: InjectKnex,
	provide: Knex,
	useValue: { select: jest.fn().mockResolvedValue({}) },
};
