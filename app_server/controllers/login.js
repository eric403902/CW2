var express = require('express');
var createError = require('http-errors');
var modellogin = require('../models/login');

module.exports.display = function(req, res, next) {
    res.render('login');
  };
module.exports.valid = function(req, res, next) {
    if (req.body.username == 'member'){res.redirect('/member');}
    if (req.body.username == 'staff'){res.redirect('/staff');}
    else{res.redirect('/');}
  };
