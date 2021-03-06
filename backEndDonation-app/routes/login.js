"use strict";
/* eslint-disable */

var express = require("express");
var router = express.Router();
var jwt = require("../jwtManager/jwt");
const bcrypt = require("bcryptjs");

/* GET home page. */
router.post("/", function (req, res, next) {
  req.db.collection('admin')
    .findOne({ email: req.body.email })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({
            status:
              "failed, you are not admin",
          });
      } else {
        if (bcrypt.compareSync("" + req.body.password, data.password)) {
          let obj = {};
          obj.email = data.email;
          obj.id = data._id;
          let token = jwt.generete(obj);
          res.status(201).json({ status: "success", result: token ,userInfo: data});
        } else {
          res.status(404).json({ status: "failed, incorrect password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
