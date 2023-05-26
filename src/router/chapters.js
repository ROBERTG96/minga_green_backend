import { Router } from "express";
import read from "../controllers/chapters/read.js";

const chaptersRouter = Router();

chaptersRouter.get("/", read);

export default chaptersRouter;
