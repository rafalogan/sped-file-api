import { hash, genSalt } from 'bcrypt';

export const snakeToCamel = (field: string): string => {
	let toArray = field.split('_');
	toArray = toArray.map((word, index) => {
		if (index >= 1) return word.charAt(0).toUpperCase() + word.slice(1);
		return word;
	});

	return toArray.join('');
};

export const camelToSnake = (field: string): string => {
	return field
		.replace(/([A-Z])/g, ' $1')
		.split(' ')
		.join('_')
		.toLowerCase();
};

export const convertDataValues = (data: any, convertTo = 'snake') => {
	const keys = Object.keys(data);
	const values = Object.values(data);
	const convertKeysTo = convertTo === 'snake' ? keys.map(camelToSnake) : keys.map(snakeToCamel);
	const result: any = {};

	convertKeysTo.forEach((key, i) => {
		if (values[i]) result[key] = values[i];
	});

	return result;
};

export const convertDataToSave = (data: any) => {
	const keys = Object.keys(data);

	keys.forEach(key => {
		if (!data[key]) deleteField(data, key);
	});

	return convertDataValues(data);
};

export const clearString = (value: string) => value.replace(/[\W]/g, '').trim();

export const hashString = async (value: string) => {
	const salt = await genSalt();
	return hash(value, salt);
};

export const stringify = (...data: any[]) => data.map(item => item.toString()).join(' ');
export const stringifyObject = (data: any) => JSON.stringify(data);

export const convertToJson = (data: string) => JSON.parse(data);

export const deleteField = (data: any, field: string) => Reflect.deleteProperty(data, field);

export const setTimestampFields = (data?: Date | string | number) => (data ? new Date(data) : undefined);

export const convertDescription = (value?: Blob | string) => {
	if (!value) return undefined;

	return typeof value === 'string' ? value : convertBinaryToString(value);
};

export const convertBinaryToString = (value: Blob) => value.toString();

export const convertArraysToObject = (headers: any[], data: any[]) => {
	const res: any = {};

	headers.forEach((i, idx) => (res[i] = data[idx]));

	return res;
};
