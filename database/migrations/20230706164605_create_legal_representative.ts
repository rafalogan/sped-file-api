import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('legal_representative', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('agent', 155).notNullable();
		table.string('cpf', 50).notNullable().unique();
		table.string('crc', 50).notNullable();
		table.string('cnpj', 50).notNullable().unique();
		table.string('phone', 50).notNullable();
		table.string('email', 155).notNullable().unique();
		table.string('county_code', 50).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('legal_representative');
}
