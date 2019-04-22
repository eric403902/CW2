var express = require('express');
var createError = require('http-errors');


module.exports.display = function(req, res, next) {
    res.render('view.ejs',{title: 'MusicLibrary'});
  }

module.exports.edit = function(req, res, next) {
    res.render('edit.ejs',{title: 'MusicLibrary'});
  }

module.exports.delete = function(req, res, next) {
    res.render('staff.ejs',{title: 'MusicLibrary'});
  }

  module.exports.create = function(req, res, next) {
      res.render('create.ejs',{title: 'MusicLibrary'});
  }
