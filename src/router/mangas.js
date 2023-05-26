import { Router } from "express";
import read from "../controllers/mangas/read.js";
const mangasRouter = Router();

mangasRouter.get("/", read);

export default mangasRouter;
