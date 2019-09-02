import { User, UserRole, UserStatus } from '../user.interface';

export class BaseUser {
  constructor(data: User) {
    this.id = data.id;
    this.email = data.email;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.role = data.role;
    this.status = data.status;
  }

  id: string;
  email: string;
  firstname: string;
  lastname: string;
  role: UserRole;
  status: UserStatus;
}
