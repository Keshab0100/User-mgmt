const mongoose = require("mongoose");

const db =
  "mongodb+srv://Keshab:Keshab%400402@crud-operation.v81zj2j.mongodb.net/?retryWrites=true&w=majority";

const connectMongo = () => {
  mongoose
    .connect(db)
    .then(console.log("Connection Succesful to mongoatlas"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongo;
