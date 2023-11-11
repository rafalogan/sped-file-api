import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.alterTable('adresses', (table: Knex.TableBuilder) => {
		table.integer('agent_id').unsigned().references('id').inTable('legal_representative').nullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.alterTable('adresses', (table: Knex.TableBuilder) => {
		table.dropColumn('agent_id');
	});
}
