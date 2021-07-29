"use strict";
/* eslint-disable */
let jwt = require("../jwtManager/jwt");
const { ObjectID } = require("bson");

class AuthorAuthotic {
  authorization(req, res, next) {
    if (req.url === "/api/v1/login") {
      next();
      return;
    }

    if (req.url === "/api/v1/signup") {
      next();
      return;
    }

    let token = req.headers.authorization;
    if (!token) {
      res.status(401).json({ status: "faild, token required" });
    } else {
      let data = jwt.verify(token);
      if (!data) {
        res.status(403).json({ status: "faild, invalid token " });
      }
      next();
    }
  }
}

module.exports = new AuthorAuthotic();
