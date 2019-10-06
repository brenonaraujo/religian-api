  
export interface User {
  readonly id?: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly email?: string;
  readonly password?: string;
  readonly role?: UserRole;
  readonly status?: UserStatus;
}

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
  }
  
  export enum UserStatus {
    PENDING = 'pending',
    CONFIRM = 'confirm',
  }