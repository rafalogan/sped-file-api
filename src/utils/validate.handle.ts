import isEmpty from 'is-empty';
import { compare } from 'bcrypt';

export const storage = process.env.STORAGE_TYPE;
export const baseUrl = () => {
	const prefix = process.env.ENABLE_HTTPS === 'true' ? 'https://' : 'http://';
	const host = process.env.HOST;
	const port = Number(process.env.PORT);

	return `${prefix}${host}:${port}`;
};

export const existsOrError = (value: any, err: any) => {
	if (isEmpty(value)) throw err;
	if (!value) throw err;
	if (Array.isArray(value) && value.length === 0) throw err;
	if (typeof value === 'string' && !value.trim()) throw err;
	if (typeof value === 'number' && !Number(value)) throw err;
};

export const notExistisOrError = (value: any, err: any) => {
	try {
		existsOrError(value, err);
	} catch (err) {
		return;
	}

	throw err;
};

export const equalsOrError = (valueA: any, valueB: any, err: any) => {
	if (valueA !== valueB) throw err;
};

export const isMatchOrError = (data: any, err: any) => {
	if (!isMatch(data.credentials, data.user)) throw err;
};

export const isMatch = (credentials: any, user: any) => compare(credentials.password, user.password);

export const isMailValid = (mail: string) => {
	const mailRegex = new RegExp(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/g);

	return mail.match(mailRegex);
};
