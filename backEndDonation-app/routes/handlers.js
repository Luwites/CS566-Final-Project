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



// router.post('/newship/', function (req, res) {

//   const addressFrom  = {
//       "object_purpose":"PURCHASE",
//       "name": "Ms Luwam",
//       "company":"Shippo",
//       "street1":"1000 N. 4th St.",
//       "city":"Fairfield",
//       "state":"IO",
//       "zip":"52557",
//       "country":"US", //iso2 country code
//       "phone":"+1 4699784504",
//       "email":"luwam.tesfamariam@miu.edu",
//   };

//   // example address_to object dict
//   const addressTo = {
//       "object_purpose":"PURCHASE",
//       "name": req.body.fnames + ' ' + req.body.lnames,
//       "company": req.body.company,
//       "street1":req.body.street,
//       "city":req.body.city,
//       "state":req.body.state,
//       "zip":req.body.zipcode,
//       "country": req.body.country, //iso2 country code
//       "phone":"+1 510 747 2863",
//       "email":"smerhay@miu.edu",
//   };

//   // parcel object dict
//   const parcelOne = {
//       "length":"5",
//       "width":"5",
//       "height":"5",
//       "distance_unit":"in",
//       "weight":"2",
//       "mass_unit":"lb"
//   };


//   const shipment = {
//       "object_purpose": "PURCHASE",
//       "address_from": addressFrom,
//       "address_to": addressTo,
//       "parcel": [parcelOne],
//       "submission_type": "DROPOFF"
//   };

//   shippo.address.create({
//     "name":"Shawn Ippotle", 
//     "company":"Shippo",
//     "street1":"215 Clayton St.",
//     "city":"San Francisco",
//     "state":"CA",
//     "zip":"94117",
//     "country":"US",
//     "email":"shippotle@goshippo.com",
//     "validate": true
// }, function(err, address) {
//     // asynchronously called
// });

// //   shippo.transaction.create({
// //       "shipment": shipment,
// //       "servicelevel_token": "dhl_express_domestic_express_doc",
// //       "carrier_account": "9f123316d413417d9cc48627c402772c",
// //       "label_file_type": "png"
// //   })
// //   .then(function(transaction) {
// //       shippo.transaction.list({
// //         "rate": transaction.rate
// //       })
// //       .then(function(mpsTransactions) {
// //           mpsTransactions.results.forEach(function(mpsTransaction){
// //               if(mpsTransaction.object_status == "SUCCESS") {
// //                   console.log("Label URL: %s", mpsTransaction.label_url);
// //                   console.log("Tracking Number: %s", mpsTransaction.tracking_number);
// //                   console.log("E-Mail: %s", mpsTransaction.object_owner);
// //                   console.log(mpsTransaction.object_status);
// //                   res.status(200).send("Label can be found under: " + mpsTransaction.label_url);
// //               } else {
// //                   // hanlde error transactions
// //                   console.log("Message: %s", mpsTransactions.messages);
// //               }
// //           });
// //       })
// //   }, function(err) {
// //       // Deal with an error
// //       console.log("There was an error creating transaction : %s", err.detail);
// //       res.send("something happened :O")
// //   });
//  })
// router.post('/successp', function (req, res) {

//   var token = req.body.stripeToken; // Using Express
//   // Charge the user's card:
// var charge = stripe.charges.create({
//   amount: 1000,
//   currency: "eur",
//   description: "Example charge",
//   source: token,
// }, function(err, charge) {
//   // asynchronously called
// });
//  res.send('Thanks!')
// })
// router.post('/successp', function (req, res) {

//   var token = req.body.stripeToken; // Using Express
//   // Charge the user's card:
// var charge = stripe.charges.create({
//   amount: 1000,
//   currency: "eur",
//   description: "Example charge",
//   source: token,
// }, function(err, charge) {
//   // asynchronously called
// });
//  res.send('Thanks!')
// })

/* GET all requests or services by city */
// router.get('/:request/city/:city/:num', function(req, res, next) {
//   let skipNo=0;
//   if(req.params.num){
//     skipNo=req.params.num * 5;
//   }
//   let collection = req.params.request;
//   req.db.collection(collection)
//   .find({city: req.params.city})
//   .sort({date:-1})
//   .skip(skipNo)
//   .limit(5)
//   .toArray()
//   .then(data => {
//     res.status(201).json({status:'success', result:data})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// });

// /* POST a comment on a specific (id) request or service */
// router.post('/:request/:id', function(req, res, next) {
//   let collection = req.params.request;
//   req.db.collection(collection).updateOne({_id:new ObjectID(req.params.id)}, 
//   {$push: {'comments': req.body}})
//   .then(_ => {
//     res.status(201).json({status:'success'})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// });


// /* POST a new request or service  */
// router.post('/:request', function(req, res, next) {
//   let obj=req.body;
//   obj.date=new Date()
//   let collection = req.params.request;
//   console.log(obj)
//   req.db.collection(collection).insertOne(obj)
//   .then(_ => {
//     res.status(201).json({status:'success'})
//   })
//   .catch(err => {
//     console.log(err)
//   })
// });

module.exports = router;