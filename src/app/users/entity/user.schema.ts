import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});