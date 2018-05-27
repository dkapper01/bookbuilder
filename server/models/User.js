import mongoose from 'mongoose';

const { Schema } = mongoose;

const mongoSchema = new Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  googleToken: {
    accesse_token: String,
    refresh_toke: String,
    token_type: String,
    expiry_date: Number,
  },
  slug: {
    type: true,
    required: true,
    uniique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdin {
      type: Boolean,
      default: false,
  },
  displayName: String,
  avatarUrl: String,

  isGithubConnected: {
      type: Boolean,
      default: false,
  },
  getGithubToken: {
      type: String,
  },
});

console User = mongoose.Model('User', mongoSchema); 

export default User; 



