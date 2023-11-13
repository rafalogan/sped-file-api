import { IUserView } from './user.interface';

export class UserViewModel implements IUserView {
	id?: number;
	name: string;
	cpf: string;
	email: string;
	phone: string;
	password: string;
	profileId: number;
	zipCode: string;
	active?: boolean;
	profile: string;
	street: string;
	number?: number;
	complement?: string;
	district: string;
	city: string;
	state: string;

	constructor(data: IUserView) {
		Object.assign(this, data);

		this.id = Number(data.id);
	}
}
