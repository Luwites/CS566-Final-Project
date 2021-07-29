"use strict";
/* eslint-disable */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var shippo = require('shippo')('shippo_test_a78177cb6c9ff706ac745ca45815ed49e8b59aad');
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient('mongodb+srv://Luwi2:luluCS477@cluster0.f4gwy.mongodb.net/final-project-566?retryWrites=true&w=majority', 
                { useUnifiedTopology: true });
let connection;
let handlersRouter=require('./routes/handlers');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(function (req, res, next) {
  try {
    if (!connection) {
      console.log("connecting...");
      client.connect(function (err) {
        if (err) throw err;
        connection = client.db("final-project-566")
        req.db = connection;
        next();
      });
    } else {
      req.db = connection;
      next();
    }
  } catch (e) {
    console.log(e);
  }
});



app.use('/pies', handlersRouter);

app.post('/newship/', function (req, res, next) {
  var addressFrom  = {
    "name": "Luwam Tesfamariam",
    "street1": "1000 N. 4th St.",
    "city": "Fairfield",
    "state": "IA",
    "zip": "52557",
    "country": "US"
};

var addressTo = {
    "name": req.body.name,
    "phone":req.body.phone,
    "street1": req.body.address1,
    "street2": req.body.address2,
    "city": req.body.city,
    "state": req.body.state,
    "zip": req.body.zipcode,
    "country": "US",
    "validate": true
};

var parcel = {
    "length": req.body.length,
    "width": req.body.width,
    "height": req.body.height,
    "distance_unit": "in",
    "weight": req.body.weight,
    "mass_unit": "lb"
}
    shippo.address.create(addressTo, function(err, shipment){

      // Creating my shippment after validating the address
      
      if(shipment.validation_results.is_valid === true){
        shippo.shipment.create({
             "address_from": addressFrom,
              "address_to": addressTo,
              "parcels": [parcel],
            "async": false
           }, function(err, shipment){
            //  console.log(shipment)
             
              const rate_amount = shipment.rates.map(obj => {
                  return obj.amount;
              })

              const estimated_days = shipment.rates.map(obj => {
                return obj.estimated_days;
            })
              var rate = Math.min(...rate_amount)
              const days = Math.min(...estimated_days)
              const s = shipment.rates.filter(obj => {
                if(obj.amount = rate){
                  if(obj.estimated_days = days){
                    return obj;
                  }
                  return obj;
                }
                obj.amount = rate})
              
          
        //creating a transaction by purchasing the minimum rate.

          shippo.transaction.create({
              "rate": s[0].object_id,
            "label_file_type": "PDF",
             "async": false
           }, function(err, transaction) {
           console.log(transaction)
            res.json(transaction)
             
           });
          
            });
          
      }
      else{
        res.json('Invalid Address')
      }
      //  res.json(shipment.validation_results.is_valid)
      
    })

})
// error handler
app.use(function(err, req, res, next) {
  res.status(500).json({err:"serverside Error"});

});

// module.exports = app;
app.listen(7000, function(){
  console.log("app is running on port 7000");
});
