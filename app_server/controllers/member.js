
var express = require('express');
var createError = require('http-errors');
var modelmember = require('../models/member');

module.exports.display = function(req, res, next) {
    //require member.js in model to access DB
    //provise username and loyalty points
    //provide information of songs in songs table 
    //provide information of use history of transaction in transaction table
    //refund button only display in transaction that finish with money only (with extract transaction state in transaction table)
    res.render('member',{title: 'member',name:'eric',point: 5, songname:'A',songprice:100,inventory:10});
  }
  
module.exports.buy = function(req, res, next) {
    //require member.js in model to access DB
    //provide download link after finish the purchasing process
    //provide username updated loyalty points and updated transaction record for redirect
    res.redirect('/member')
  }
  
module.exports.refund = function(req, res, next) {
    //receieve refund request and change state of transaction in transaction table
    //refund will complete until staff accept 
    res.redirect('/member')
  }