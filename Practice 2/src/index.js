import express from "express";
import routes from "./router";
import globalRouter from "./router/globalRouter";
import coursesRouter from "./router/coursesRouter";
import apiRouter from "./router/apiRouter";
import apiV1Router from "./router/apiV1Router";
import apiV2Router from "./router/apiV2Router";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiv1, apiV1Router);
app.use(routes.apiv2, apiV2Router);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
