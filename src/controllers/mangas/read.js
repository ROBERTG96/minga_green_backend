import mangasModel from "../../models/Manga.js";

export default async (req, res) => {
  try {
    let allMangas = await mangasModel.find();
    if (allMangas) {
      return res.status(200).json({
        response: allMangas,
        message: "Mangas found successfully",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "Mangas not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      response: null,
      message: "Error: " + error.message,
    });
  }
};
