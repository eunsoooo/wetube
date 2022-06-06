import express from "express";

import { handleJoin } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", handleJoin);

export default globalRouter;
