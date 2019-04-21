var express = require('express');
var createError = require('http-errors');


module.exports.display = function(req, res, next) {
    res.render('album.ejs',{title: 'MusicLibrary'});
  }
