var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


var albumSchema = new Schema({
  name: String,
  artistName:String,
  releaseDate:String,
  genres:[String]
});
var album = mongoose.model('album', BookSchema);

module.exports = album;
