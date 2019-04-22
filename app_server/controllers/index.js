var express = require('express');
var createError = require('http-errors');
var pool = require ('./../../dbpool.js');

module.exports.display = function(req, res) {
  pool.query('SELECT * FROM ALBUM', function (err, result, fields) {
      if (err) throw new Error(err)
      albums = ((JSON.parse(JSON.stringify(result))));
      res.render('index',{title: 'MusicLibrary', albums: albums});
  })};
