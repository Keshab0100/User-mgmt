const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;
const app = express();
const conDB = require("./src/database/connection");
// app.use(express.json());

dotenv.config({ path: "config.env" });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.use(morgan("tiny"));
conDB();

app.use("/", require("./src/route/router"));

app.listen(PORT, () => {
  console.log("listening");
});
