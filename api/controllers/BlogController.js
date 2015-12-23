"use strict";

var Post = require('../models/Post.js');
var bodyparser = require('body-parser');
var fs = require('fs');
//AWS INFO
var AWS = require('aws-sdk');
var accessKeyId = process.env.AWS_ACCESS_KEY;
var secretAccessKey = process.env.AWS_SECRET_KEY;
var S3_BUCKET = process.env.S3_BUCKET;
var AWS_region = process.env.AWS_REGION;

var AWS_config = {
    accessKeyId: 'AKIAIX27QQSBQYUX33WA',
    secretAccessKey: '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'
};

module.exports = function(router) {
  router.use(bodyparser.json());

  router.post('/entries', function(req, res) {
    var newPost = new Post(req.body);
    newPost.save(function(err, data) {
      if(err) {
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }
      res.status(200).json({msg: 'Post succesful'});
    })
  });

  router.get('/entries', function(req, res) {
    Entry.find({}, function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }
      res.json(data);
    });
  });

  router.get('/entries/:id', function(req, res) {
    Entry.findOne({_id: req.params.id}, function(err, data) {
      if(err){
        console.log(err);
        return res.status(500).json({msg: 'Uh oh! There must have been a server error somewhere.'});
      }

      res.json(data);
    });
  });

  router.put('/entries/:id', eatAuth, function(req, res) {
    var update = req.body;
    delete update._id;

    Entry.update({'_id': req.params.id}, update, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({err: 'internal server error'});
      }
      res.status(200).json({msg: 'entry updated'});
    });
  });

  router.delete('/entries/:id', eatAuth, function(req, res) {
    Entry.remove({'_id': req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({err: 'internal server error'});
      }

      res.status(200).json({msg: 'entry removed'});
    });
  });

  router.get('/upload-config', eatAuth, function(req, res) {
    res.json(AWS_config);
  });

};
