const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const PORT = 8000 || process.env.PORT;
const app = express();
const conDB = require('./src/database/connection')

dotenv.config({ path: "config.env" });
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(bodyparser.urlencoded({ extended: true }));
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.use(morgan("tiny"));
conDB();

app.use('/',require('./src/route/router'))

app.listen(PORT, () => {
  console.log("listening");
});
