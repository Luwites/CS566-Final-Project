"use strict";
/* eslint-disable */

var jwt=require('jsonwebtoken');
var secret='JsonWebTokenSignedIt'

class Jwtmanager {

    generete(data){
        let token=jwt.sign(data,secret);
        return token;
    }
    verify(token){
        let data=jwt.verify(token,secret);
        return data;
    }

}

module.exports=new Jwtmanager();