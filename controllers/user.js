import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
export const updateUserCart = async (req, res, next) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      {
        $push: {
          carts: {
            hotelId: req.body.hotelId,
            photo: req.body.photo,
            hotelName: req.body.hotelName,
            roomId: req.body.roomId,
            roomType: req.body.roomType,
            roomNumber: req.body.roomNumber,
            unavailableDates: req.body.dates,
          },
        },
      }
    );
    res.status(200).json("User cart has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate('username').exec();;
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getUserCart = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user.carts);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
