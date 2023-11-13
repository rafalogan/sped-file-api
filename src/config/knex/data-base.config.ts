import knex, { Knex } from 'knex';
import { onError, onInfo } from 'src/utils';

export class DataBaseConfig {
	private readonly conn: Knex;
	constructor(private config: Knex.Config) {
		this.conn = knex(this.config);
	}

	async latest() {
		try {
			const isConnected = await this.conn.raw('SELECT 1+1 AS result');

			onInfo(DataBaseConfig.name, `Data base is connected to ${isConnected}`);
		} catch (err) {
			return onError(DataBaseConfig.name, 'Data base is not connected', err);
		}

		return this.conn.migrate
			.latest(this.config as Knex.MigratorConfig)
			.then(() => onInfo(DataBaseConfig.name, 'Base updated successfully'))
			.catch(err => onError(DataBaseConfig.name, 'Fail on updated database', err));
	}

	async rollback() {
		return this.conn.migrate
			.rollback(this.config as Knex.MigratorConfig)
			.then(() => onInfo(DataBaseConfig.name, 'Base is clear'))
			.catch(err => onError(DataBaseConfig.name, err));
	}
}
