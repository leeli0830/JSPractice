import express from "express";

const app = express();

const handleHome = (req, res) => {
  res.send("Home");
};

const handleAboutUS = (req, res) => {
  res.send("About-us");
};

const handleContact = (req, res) => {
  res.send("Contact");
};

const handleProtected = (req, res) => {
  res.send("Protected");
};

const printMiddleWare = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const protectdMiddleware = (req, res, next) => {
  res.redirect("/");
};

app.use(printMiddleWare);

app.get("/", handleHome);
app.get("/about-us", handleAboutUS);
app.get("/contact", handleContact);
app.get("/protected", protectdMiddleware, handleProtected);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
