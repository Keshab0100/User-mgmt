const userDb = require("../model/model");

exports.fetchUser = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    userDb
      .findById(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    userDb
      .find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
exports.insertUser = (req, res) => {
  if (!req.body) {
    res.status(400).send("Content cannot be empty");
    return;
  }
  const user = new userDb({
    name: req.body.name,
    email: req.body.email,
    password: req.body.pass,
    mobile: req.body.mno,
  });

  user
    .save(user)
    .then((data) => {
      // window.location.href = "http://localhost/fetch";
      res.redirect('/fetch')
      // res.status(201).json({ sucess: true, data });
      // res.redirect('/fetch')
    })
    .then(() => {
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  userDb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(400).send("error");
      } else {
        res.send({
          message: "user Deleted Successfully",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.updateUser = (req, res) => {
  if (!req.body) {
    res.status(400).send("Content cannot be empty");
    return;
  }
  const id = req.params.id;
  userDb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false, new: true })
    .then((data) => {
      if (!data) {
        res.status(400);
      } else {
        // res.send(data);
        res.status(201).json({ success: true, data });
        res.redirect("/fetch");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
