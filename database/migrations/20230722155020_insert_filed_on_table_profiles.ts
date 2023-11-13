import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.alterTable('profiles', (table: Knex.TableBuilder) => {
		table.string('key', 155).notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.alterTable('profiles', (table: Knex.TableBuilder) => {
		table.dropColumn('key');
	});
}
