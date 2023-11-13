import { IAddress } from 'src/types/interfacies/adress.interfece';

export interface IUser {
	id?: number;
	name: string;
	cpf: string;
	email: string;
	phone: string;
	password: string;
	profileId: number;
	active?: boolean;
}

export interface IUserView extends IUser, IAddress {
	profile: string;
}
