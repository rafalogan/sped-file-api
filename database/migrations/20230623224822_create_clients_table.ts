import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('clients', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('corporate_name', 155).notNullable();
		table.string('fantasy_name', 155).notNullable();
		table.string('cnpj', 50).notNullable().unique();
		table.string('state_registration', 55).notNullable();
		table.string('state_code', 20).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('clients');
}
