const mongoose = require("mongoose");


const connectMongo = () => {
  mongoose
    .connect(process.env.url)
    .then(console.log("Connection Succesful to mongoatlas"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongo;
