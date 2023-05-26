import { Router } from "express";
import read from "../controllers/users/read.js";

const usersRouter = Router();

usersRouter.get("/", read);

export default usersRouter;
