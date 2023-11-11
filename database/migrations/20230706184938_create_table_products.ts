import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('products', (table: Knex.TableBuilder) => {
		table.increments('id').primary();
		table.string('code', 155).notNullable();
		table.binary('description').nullable();
		table.string('producer', 155).notNullable();
		table.integer('stock').notNullable();
		table.integer('unitary_value').notNullable();
		table.integer('total').notNullable();
		table.integer('tax_situation_id').unsigned().references('id').inTable('tax_situations').notNullable();
		table.integer('aliquot').notNullable();
		table.integer('period_id').unsigned().references('id').inTable('periods').notNullable();
		table.integer('client_id').unsigned().references('id').inTable('clients').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('products');
}
