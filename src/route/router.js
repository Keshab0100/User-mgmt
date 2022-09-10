const express = require("express");
const route = express.Router();
const axios = require("axios");
const controller = require("../controller/controller");

route.get("/", (req, res) => {
  res.render("index");
  console.log("Sucess");
});

route.get("/fetch", (req, res) => {
  axios
    .get("http://localhost:8000/api/users/")
    .then(function (response) {
      res.render("fetch", { userdbs: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
});
route.get("/update", (req, res) => {
  axios
    .get("http://localhost:${}{/api/users/", { params: { id: req.query.id } })
    .then(function (response) {
      res.render("update", { userdbs: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
});

route.post("/api/users", controller.insertUser);
route.get("/api/users", controller.fetchUser);
route.put("/api/users/:id", controller.updateUser);
route.delete("/api/users/:id", controller.deleteUser);

module.exports = route;
