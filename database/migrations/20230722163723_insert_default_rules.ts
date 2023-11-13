import { Knex } from 'knex';

const rules = [
	{
		rule: 'Pode Visualizar',
		key: 'view',
		description: 'Pode visualizar os conteudos.',
		active: true,
	},
	{
		rule: 'Pode Editar',
		key: 'edit',
		description: 'Pode editar os conteudos.',
		active: true,
	},
	{
		rule: 'Pode Criar',
		key: 'create',
		description: 'Pode cirar conteudos.',
		active: true,
	},
];

export async function up(knex: Knex): Promise<void> {
	return knex.batchInsert('rules', rules);
}

export async function down(knex: Knex): Promise<void> {
	return rules.forEach(item => knex('rules').where({ key: item.key }).del());
}
