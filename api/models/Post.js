var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String,
  headerImg: String,
  complete: {type: Boolean, default: false}
});

module.exports = mongoose.model('Post', PostSchema);
