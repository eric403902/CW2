var express = require('express');
var createError = require('http-errors');
var pool = require ('./../../dbpool.js');


module.exports.display = function(req, res, next) {
   //get the album id according to the req.url
    var albumid = req.originalUrl.substr(req.originalUrl.length - 8);
    console.log(albumid);
    var album = 0
    pool.query(`SELECT * FROM ALBUM WHERE ALBUMID='${albumid}';`, function (err, result, fields) {
        if (err) throw new Error(err)
        album = result[0];

    });
    pool.query(`SELECT * FROM SONG WHERE ALBUMID='${albumid}';`, function (err, result, fields) {
        if (err) throw new Error(err)
        songs = result
        console.log(result);
        res.render('album.ejs',{title: 'MusicLibrary', album: album, songs: songs});
    });
  };

module.exports.edit = function(req, res, next) {
    res.render('edit.ejs',{title: 'MusicLibrary'});
  };

module.exports.delete = function(req, res, next) {
    res.render('staff.ejs',{title: 'MusicLibrary'});
  };

  module.exports.create = function(req, res, next) {
      res.render('create.ejs',{title: 'MusicLibrary'});
  };
