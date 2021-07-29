"use strict";
/* eslint-disable */

var express = require("express");
var router = express.Router();
var jwt = require("../jwtManager/jwt");
const bcrypt = require("bcryptjs");

/* POST /api/v1/signup. */
router.post("/", function (req, res, next) {
  req.db.collection('admin')
    .findOne({ email: req.body.email})
    .then((data) => {
      if (data) {
        res.status(409).json({
          status:
            "failed, user already exist, email and password must be unique",
        });
      } else {
        let mybody = req.body;
        mybody.password= bcrypt.hashSync("" + req.body.password, 12),
        req.db.collection('admin')
          .insertOne(mybody)
          .then((data) => {
            console.log(`signed up....`);
            console.log("data after signed up", data.ops[0]._id);
            let obj = {};
            obj.email = mybody.email;
            obj.id = data.ops[0]._id;

            let token = jwt.generete(obj);
            res.json({ status: "success", result: token, userInfo: mybody });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
