import categoryModel from "../../models/Category.js";

export default async (req, res) => {
  try {
    let allCategory = await categoryModel.find();
    if (allCategory) {
      return res.status(200).json({
        response: allCategory,
        message: "Categories found successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Categories not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error: " + error.message,
    });
  }
};
