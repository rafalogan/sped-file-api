import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('tax_situations', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('name', 255).notNullable();
		table.binary('description').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('tax_situations');
}
