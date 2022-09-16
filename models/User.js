import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    carts: [
      {
        hotelId: String,
        hotelName: String,
        photo: String,
        roomId: String,
        roomType: String,
        roomNumber: String,
        unavailableDates: { type: [Date] },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
