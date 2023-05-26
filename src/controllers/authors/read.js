import authorsModel from "../../models/Author.js";

export default async (req, res) => {
  try {
    let all = await authorsModel.find();
    if (all) {
      return res.status(200).json({
        response: all,
        message: "Authors found successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Authors not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error: " + error.message,
    });
  }
};
