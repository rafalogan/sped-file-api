import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('name', 255).notNullable();
		table.string('cpf', 50).notNullable().unique();
		table.string('email', 255).notNullable().unique();
		table.string('phone', 50).nullable();
		table.string('password', 255).notNullable();
		table.integer('profile_id').unsigned().references('id').inTable('profiles').notNullable();
		table.boolean('active').notNullable().defaultTo(true);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('users');
}
