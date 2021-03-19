import express from "express";
import routes from "../router";
import { courses, courses_new, mine } from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get(routes.home, courses);
coursesRouter.get(routes.new, courses_new);
coursesRouter.get(routes.mine, mine);

export default coursesRouter;
