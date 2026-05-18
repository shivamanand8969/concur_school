import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    firstName: {
      type: String,
      default:"",
    },
    lastName: {
      type: String,
      default:"",
    },
    username: {
      type: String,
      unique: false,
       sparse: true,
       default: null
    },

    profilePicture: {
      type: String,
      required: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
