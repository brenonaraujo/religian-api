import { Injectable, Inject, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { User } from './entity/user.interface';
import { CreateUserDto } from './entity/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async findOne(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async create(userDto: CreateUserDto): Promise<User> | undefined {
    userDto.password = await bcrypt.hash(userDto.password, 10);
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
