import express from "express";
import path from "path";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
