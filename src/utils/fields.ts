export const userFields = [
	'id',
	'first_name as firstName',
	'last_name as lastName',
	'cpf',
	'email',
	'phone',
	'password',
	'zip_code as zipCode',
	'street',
	'number',
	'complement',
	'district',
	'city',
	'state',
	'profile_id as profileId',
	'deleted_at as deletedAt',
];

export const userOtherTablesFiled = {
	profile: { profileName: 'p.name', profileDescription: 'p.description' },
	photo: { photoTitle: 'f.title', PhotoAlt: 'f.alt', photoName: 'f.name', photoUrl: 'f.url', photoLocation: 'f.location' },
};

export const profileFields = ['id', 'name', 'description', 'active'];

export const categoryFields = ['id', 'name', 'description', 'url', 'active', 'parent_id as parentId', 'user_id as userId'];

export const eventFields = [
	'id',
	'title',
	'subtitle',
	'content',
	'popularity',
	'release_date as releaseDate',
	'vote_average as voteAverage',
	'vote_count as voteCount',
	'type',
	'category_id as categoryId',
	'user_id as userId',
];

export const eventFieldsJoin = [
	'e.id as id',
	'e.title as title',
	'e.subtitle as subtitle',
	'e.content as content',
	'e.type as type',
	'popularity',
	'release_date as releaseDate',
	'vote_average as voteAverage',
	'vote_count as voteCount',
	'e.category_id as categoryId',
	'e.user_id as userId',
	'f.id as fileId',
	'f.title as fileTitle',
	'f.alt as fileAlt',
	'f.name as fileName',
	'f.type as fileType',
	'f.url as fileUlr',
	'location as fileLocation',
];

export const placeFields = [
	'id',
	'name',
	'description',
	'phone',
	'zip_code as zipCode',
	'street',
	'number',
	'complement',
	'district',
	'city',
	'state',
	'url_maps as urlMaps',
	'user_id as  userId',
];

export const theaterFields = [
	'name',
	'description',
	'sections_number as sectionsNumber',
	'sections_type as sectionsType',
	'raws_per_section as rawsPerSection',
	'rows_type as rowsType',
	'capacity',
	'addressed_seats as addressedSeats',
	'place_id as placeId',
];

export const durationFields = ['id', 'start', 'end', 'theater_id as theaterId'];

export const ticketFields = [
	'id',
	'amount',
	'unitary_value as unitaryValue',
	'event_id as eventId',
	'place_id as placeId',
	'theater_id as theaterId',
	'duration_id as durationId',
	'user_id as userId',
];

export const ticketOtherTableFields = {
	event: { eventTitle: 'e.title', eventSubtitle: 'e.subtitle', eventContent: 'e.content', eventType: 'e.type' },
	place: { placeName: 'p.name', placeDescription: 'p.description' },
	theater: { theaterName: 'th.name', theaterDescription: 'th.description' },
	duration: { durationStart: 'd.start', durationEnd: 'd.end' },
};

export const fileFields = [
	'id',
	'title',
	'alt',
	'name',
	'filename',
	'type',
	'url',
	'location',
	'event_id as eventId',
	'category_id as categoryId',
	'user_id  as userId',
];

export const paymentFields = [
	'id',
	'forma',
	'numero',
	'instituicao',
	'expiracao',
	'codigo_seguranca as codigoSeguranca',
	'nome',
	'cpf',
	'active',
	'user_id as userId',
];

export const saleFields = [
	'id',
	'code',
	'discount',
	'amount',
	'unitary_value as unitaryValue',
	'total',
	'payment_status as paymentStatus',
	'payment_id as paymentId',
	'user_id as userId',
	'ticket_id as ticketId',
];

export const contactFields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'created_at as createdAt', 'sale_id as saleId'];
export const newsletterFields = ['id', 'name', 'email', 'active'];
