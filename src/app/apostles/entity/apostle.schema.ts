import * as mongoose from 'mongoose';

export const ApostleSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  about: String,
  rank: {
      type: String,
      enum: ['Apostle', 'Christ', 'God'],
      default: 'Apostle'
  }
});