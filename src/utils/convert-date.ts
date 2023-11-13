import { onLog } from './log.hendle';

export const convertToDate = (value: number | Date | string): Date => {
	if (value instanceof Date) return value;
	if (typeof value === 'string') return convertStringToDate(value);

	return new Date(value);
};

export const convertStringToDate = (value: string): Date => {
	if (value.includes('T')) return new Date(value);
	if (value.includes('-') && value.length === 10) return convertSimplesStringToDate(value.split('-'));
	if (value.includes('/') && value.length === 10) return convertSimplesStringToDate(value.split('/'));

	return convertCompleteStringToDate(value);
};

export const convertPtBrToDate = (value: string) => {
	if (value.length === 10) return convertStringToDate(value);

	const [date, time] = value.split(' ');
	const [day, month, year] = date.split('/').map(Number);
	const [hour, minute, second] = time.split(':').map(Number);

	return new Date(year, month - 1, day, hour, minute, second);
};

const convertSimplesStringToDate = (value: string[]) => {
	const [part1, month, part3] = value.map(Number);
	const year = `${part1}`.length === 4 ? part1 : part3;
	const day = year === part1 ? part3 : part1;

	return new Date(year, month + 1, day);
};

const convertCompleteStringToDate = (value: string) => {
	if (value.includes(' ') && value.includes('-') && value.includes(':') && Number(value.slice(0, 4)))
		return returnDate(value.replace(' ', 'T'));
	if (value.includes(' ') && value.includes('/') && value.includes(':') && Number(value.slice(0, 4)))
		return returnDate(value.replace(' ', 'T').replace('///g', '-'));

	return convertPtBrToDate(value);
};

const returnDate = (value: string) => {
	onLog('chegou nesse ponto', value);
	onLog('data', new Date(value));

	return new Date(value);
};

export const upperCaseFirstLetter = (value: string) => {
	const [firstWrod, ...restWords] = value.split(' ');
	const [firstLetter, ...rest] = firstWrod;
	const resultWord = `${firstLetter.toLocaleUpperCase()}${rest.join('')}`;

	return `${resultWord} ${restWords.join(' ')}`.trim();
};
