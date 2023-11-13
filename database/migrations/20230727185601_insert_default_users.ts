import { Knex } from 'knex';

import { convertDataValues, hashString } from 'src/utils';

const users = [
	{
		name: 'User Root',
		email: 'root@root.com',
		cpf: '00000000000',
		profileId: 1,
		active: true,
		phone: '00000000000',
		password: 'Root@Dev!2#',
	},
	{
		name: 'User Admin',
		email: 'admin@root.com',
		cpf: '11111111111',
		profileId: 2,
		active: true,
		phone: '00000000000',
		password: 'Admin@Dev!2#',
	},
];

export async function up(knex: Knex): Promise<void> {
	const data = [];

	for (const item of users) {
		const profile = await knex('profiles')
			.select('id')
			.where('key', item.name.toLowerCase() === 'user root' ? 'root' : 'admin')
			.first();

		item.profileId = Number(profile?.id);
		item.password = await hashString(item.password);

		data.push(convertDataValues(item));
	}

	return knex.batchInsert('users', data);
}

export async function down(knex: Knex): Promise<void> {
	return users.forEach((i: any) => knex('users').where('email', i.email).del());
}
