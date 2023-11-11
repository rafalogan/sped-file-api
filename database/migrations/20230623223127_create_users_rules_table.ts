import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users_rules', (table: Knex.TableBuilder) => {
		table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
		table.integer('rule_id').unsigned().references('id').inTable('rules').notNullable();
		table.primary(['user_id', 'rule_id']);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users_rules');
}
