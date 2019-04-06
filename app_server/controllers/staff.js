
var express = require('express');
var createError = require('http-errors');
var modelstaff = require('../models/staff');
module.exports.display = function(req, res, next) {
    //require staff.js in model to access DB
    //select song information and calulate the sum of attribute "purchase number" in song table
    //select attribute "refund state" in transaction table and calulate number of success(S) and reject(R) 
    //output result in corresponsed table 
    res.render('staff',{title: 'staff'});
  }
module.exports.change = function(req, res, next) {
    //update changed value into song table
    res.redirect('/staff');
  }
module.exports.creat = function(req, res, next) {
    //insert new entire into song table
    res.redirect('/staff');
  }
module.exports.delete = function(req, res, next) {
    //delete selected entire of song table
    res.redirect('/staff');
  }
