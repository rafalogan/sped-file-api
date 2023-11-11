import { resolve } from 'node:path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailerOptions } from '@nestjs-modules/mailer';

const templateDir = resolve(__dirname, '..', '..', 'templates');

export const mailerOptions = (from?: string): MailerOptions => ({
	transport: {
		host: process.env.MAILER_HOST,
		port: Number(process.env.MAILER_PORT),
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASSWORD,
		},
	},
	defaults: {
		from: from || '<No-reply> teste@api.com',
	},
	template: {
		dir: templateDir,
		adapter: new PugAdapter(),
		options: {
			strict: true,
		},
	},
});
