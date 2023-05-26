import { Router } from "express";
import read from "../controllers/authors/read.js";
import create from "../controllers/authors/create.js";
const authorsRouter = Router();

authorsRouter.post("/", create);
authorsRouter.get("/", read);

export default authorsRouter;
