
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    policyNo: { type: String, required: true, unique: true },
    category: { type: String, enum:["broker", "client"], required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePhoto: { type: String },
    createdAt: { type: Date, default: Date.now },

  });


  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });
  
  export const User = mongoose.model('User', userSchema);