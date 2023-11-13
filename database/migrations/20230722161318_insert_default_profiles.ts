import { Knex } from 'knex';

const profiles = [
	{
		key: 'root',
		profile: 'Root Profile',
		description: 'Perfil de root do sistema, perfil especial para desenvolviemento',
		active: true,
	},
	{
		key: 'admin',
		profile: 'Adminstrador',
		description: 'Perfil do(s) Adminstrador(es), do sistama mais utilizado por donos e socios.',
		active: true,
	},
	{
		key: 'menanger',
		profile: 'Gerente',
		description: 'Perfil do(s) Gerente(s) do sistema.',
		active: true,
	},
	{
		key: 'supervisor',
		profile: 'Superusor',
		description: 'Perfil do(s) Supervisor(es) do sistema.',
		active: true,
	},
	{
		key: 'user',
		profile: 'Funcionário',
		description: 'Perfil do(s) Funcionário(s) do sistema. perfil mais básico.',
		active: true,
	},
];

export async function up(knex: Knex): Promise<void> {
	return knex.batchInsert('profiles', profiles);
}

export async function down(knex: Knex): Promise<void> {
	return profiles.forEach(item => knex('profiles').where({ key: item.key }).del());
}
