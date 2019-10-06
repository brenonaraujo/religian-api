import { Login } from '../login.interface';

export class LoginDto {
    constructor(data: Login) {
        this.email = data.email;
        this.password = data.password;
    }

    email: string;
    password: string;
}