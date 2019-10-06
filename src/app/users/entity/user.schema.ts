import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
});