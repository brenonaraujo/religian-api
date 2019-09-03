import { Injectable, Inject, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApostleDto } from './entity/dto/apostle-dto';
import { Apostle } from './entity/apostle.interface';

@Injectable()
export class ApostlesService {
  constructor(
    @Inject('APOSTLE_MODEL') private readonly apostleModel: Model<Apostle>,
  ) {}

  async create(apostleDto: ApostleDto): Promise<Apostle> {
    const createdApostle = new this.apostleModel(apostleDto);
    try {
      return await createdApostle.save();
    } catch (error) {
        if (error.code === 11000) throw new ConflictException;
        throw new InternalServerErrorException;
    }
  }

  async findAll(): Promise<Apostle[]> {
    return await this.apostleModel.find().exec();
  }
}
