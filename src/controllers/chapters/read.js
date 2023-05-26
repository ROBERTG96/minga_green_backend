import chaptersModel from "../../models/Chapter.js";

export default async (req, res) => {
  try {
    let allChapters = await chaptersModel.find();
    if (allChapters) {
      return res.status(200).json({
        response: allChapters,
        message: "Chapters found successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Chapters not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error: " + error.message,
    });
  }
};
