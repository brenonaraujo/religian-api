import { Injectable, Inject, HttpException, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './entity/user.interface';
import { BaseUser } from './entity/dto/base-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async create(userDto: BaseUser): Promise<User> | undefined {
    const createdUser = new this.userModel(userDto);
    try {
      return await createdUser.save();
    } catch (error) {
      throw new ConflictException(); 
    }
  }

  async listAll(): Promise<User | undefined> {
    return await this.userModel.find();
  }
}
