import { IUser } from './user.interface';

export class UserEntity implements IUser {
	id?: number;
	name: string;
	cpf: string;
	email: string;
	phone: string;
	password: string;
	profileId: number;
	active?: boolean;

	constructor(data: IUser, id?: number) {
		Object.assign(this, data);

		this.id = Number(id || data?.id) || undefined;
	}
}
