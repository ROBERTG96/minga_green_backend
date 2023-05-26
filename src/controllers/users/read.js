import userModel from "../../models/User.js";

export default async (req, res) => {
  try {
    let allUser = await userModel.find();
    if (allUser) {
      return res.status(200).json({
        response: allUser,
        message: "Users found successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Users not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error: " + error.message,
    });
  }
};
