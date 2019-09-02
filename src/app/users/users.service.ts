import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './entity/user.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {
  }

  async findOne(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({email: email}).exec();
  }
  
}