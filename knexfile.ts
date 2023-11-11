require('ts-node/register');
require('tsconfig-paths/register');

import dotenv from 'dotenv';
import { knexOptions } from 'src/config/knex/knex.config';

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env' });

module.exports = knexOptions();
