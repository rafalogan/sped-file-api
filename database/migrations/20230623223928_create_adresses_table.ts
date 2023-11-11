import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('adresses', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('zip_code', 45).notNullable();
		table.string('street', 155).notNullable();
		table.string('number', 50).nullable();
		table.string('complement', 155).nullable();
		table.string('district', 50).notNullable();
		table.string('city', 100).notNullable();
		table.string('state', 50).notNullable();
		table.integer('user_id').unsigned().references('id').inTable('users').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('adresses');
}
