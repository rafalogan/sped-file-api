import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('periods', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.timestamp('start_date').notNullable();
		table.timestamp('end_date').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('periods');
}
