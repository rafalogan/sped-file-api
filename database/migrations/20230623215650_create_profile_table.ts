import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('profiles', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('profile', 50).notNullable().unique();
		table.binary('description').nullable();
		table.boolean('active').notNullable().defaultTo(true);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('profiles');
}
