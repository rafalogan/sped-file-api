import { Knex } from 'knex';

import { convertDataValues } from 'src/utils';

const adresses = [
	{
		zipCode: '70702110',
		street: 'Quadra SHN Quadra 2 Bloco K',
		district: 'Asa Norte',
		city: 'Brasília',
		state: 'DF',
	},
	{
		zipCode: '71881776',
		street: 'Quadra QN 22 Conjunto 1',
		district: 'Riacho Fundo II',
		city: 'Brasília',
		state: 'DF',
	},
];

export async function up(knex: Knex): Promise<void> {
	const data = [];

	for (const item of adresses) {
		const user = await knex('users')
			.select('id')
			.where('email', item.district.toLowerCase() === 'asa norte' ? 'root@root.com' : 'admin@root.com')
			.first();
		const { id: userId } = user;

		data.push(convertDataValues({ ...item, userId: Number(userId) }));
	}

	return knex.batchInsert('adresses', data);
}

export async function down(knex: Knex): Promise<void> {
	return adresses.forEach(i => knex('adresses').where('zip_code', i.zipCode).del());
}
