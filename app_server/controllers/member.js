
var express = require('express');
var createError = require('http-errors');
var modelmember = require('../models/member');

module.exports.display = function(req, res, next) {
    //require member.js in model to access DB
    //provide username and loyalty points
    //provide information of songs in songs table 
    //provide information of use history of transaction in transaction table
    //refund button only display in transaction that finish with money only transaction state(M) in transaction table
    res.render('member',{title: 'member',name:'eric',point: 5, songname:'A',songprice:100,inventory:10});
  }
  
module.exports.buy = function(req, res, next) {
    //require member.js in model to access DB
    //updated loyalty points and create transaction record
    //provide download link after finish the purchasing process
    //updated transaction record for redirect
    res.redirect('/member')
  }
  
module.exports.refund = function(req, res, next) {
    //receieve refund request if request day within 3 days of purchased,change refund state to be success(S) in transaction table
    //if request day is not within 3 days of purchased , reject refund and change refund state to be reject(R) in transaction table
    //refund will complete and return money if request receieved
    res.redirect('/member')
  }