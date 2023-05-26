import authorsModel from "../../models/Author.js";

export default async (req, res) => {
  try {
    let data = req.body;
    let createDoc = await authorsModel.create(data);
    if (createDoc) {
      return res.status(200).json({
        response: createDoc,
        message: "Created Author successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "not created",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error not created: " + error.message,
    });
  }
};
