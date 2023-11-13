import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';

import { InjectKnex } from 'nestjs-knex';

@Injectable()
export class AuthService {
	constructor(@InjectKnex() private readonly conn: Knex) { }
}
