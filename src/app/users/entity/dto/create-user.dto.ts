import { BaseUser } from './base-user.dto';
import { User } from '../user.interface';

export class CreateUserDto extends BaseUser {
    constructor(data: User){
        super(data);
        this.password = data.password;
    }

    password: string;
}