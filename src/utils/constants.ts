import { CorsOptions, CorsOptionsDelegate } from 'cors';

export const DEFAULT_CORSOPTIONS: CorsOptions | CorsOptionsDelegate = {
	origin: '*',
	optionsSuccessStatus: 200,
};

export const IMAGE_MIME_TYPE = [
	'image/bmp',
	'image/cis-cod',
	'image/gif',
	'image/ief',
	'image/jpeg',
	'image/jpeg',
	'image/jpeg',
	'image/pipeg',
	'image/svg+xml',
	'image/tiff',
	'image/tiff',
	'image/x-cmu-raster',
	'image/x-cmx',
	'image/x-icon',
	'image/x-portable-anymap',
	'image/x-portable-bitmap',
	'image/x-portable-graymap',
	'image/x-portable-pixmap',
	'image/x-rgb',
	'image/x-xbitmap',
	'image/x-xpixmap',
	'image/x-xwindowdump',
];

export const VIDEO_MIME_TYPE = [
	'video/mpeg',
	'video/mpeg',
	'video/mpeg',
	'video/mpeg',
	'video/mpeg',
	'video/mpeg',
	'video/mp4',
	'video/quicktime',
	'video/quicktime',
	'video/x-la-asf',
	'video/x-la-asf',
	'video/x-ms-asf',
	'video/x-ms-asf',
	'video/x-ms-asf',
	'video/x-msvideo',
	'video/x-sgi-movie',
];

export const TERMINAL_COLORS = {
	reset: '\x1b[0m',

	black: '\x1b[30m',
	blue: '\x1b[34m',
	cyan: '\x1b[36m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	magenta: '\x1b[35m',
	white: '\x1b[37m',

	blackBg: '\x1b[40m',
	redBg: '\x1b[41m',
	greenBg: '\x1b[42m',
	yellowBg: '\x1b[43m',
	blueBg: '\x1b[44m',
	magentaBg: '\x1b[45m',
	cyanBg: '\x1b[46m',
	whiteBg: '\x1b[47m',
};
