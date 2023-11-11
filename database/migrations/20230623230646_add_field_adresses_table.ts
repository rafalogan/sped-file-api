import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.alterTable('adresses', (table: Knex.TableBuilder) => {
		table.integer('client_id').unsigned().references('id').inTable('clients').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.alterTable('adresses', (table: Knex.TableBuilder) => {
		table.dropColumn('client_id');
	});
}
