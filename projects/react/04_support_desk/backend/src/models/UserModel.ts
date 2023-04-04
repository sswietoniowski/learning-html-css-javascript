import mongoose, { Schema } from 'mongoose';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: { type: String, required: [true, 'Please provide a password'] },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
