"use strict";
/* eslint-disable */

var express = require('express');
var router = express.Router();
const { ObjectID } = require('bson');
const http = require('http');


/* GET all pies posted for donation  */
router.get('/', function(req, res, next) {
  req.db.collection('pies').find()
  .toArray()
  .then(data => {
    res.status(201).json({status:'success', result:data})
  })
  .catch(err => {
    console.log(err)
  })
});


// /* GET a detail of a single pie by id  */
router.get('/:id', function(req, res, next) {
  req.db.collection('pies').findOne({_id: new ObjectID(req.params.id)})
  .then(data => {
    res.status(201).json({status:'success', result:data})
  })
  .catch(err => {
    console.log(err)
  })
});

module.exports = router;