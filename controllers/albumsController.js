var db = require('../models');

// GET /api/albums
function index(req, res) {
  // access database and pull out all albums
  console.log("index called");
  db.Album.find({}, function(err, allAlbums) {
    if(err){console.log("The error in index method of albumsController ",err);}
    else { console.log(allAlbums);}
    res.json(allAlbums);
  });
}
// POST /api/albums
function create(req, res) {
  console.log(`inside create method ${req.body}`);
var genres = req.body.genres.split(', ');
req.body.genres = genres;
console.log(`genres is ${req.body.genres}`);

db.Album.create(req.body, function(err, album) {
  if (err) { console.log('error occured in create method of controller', err); }
  res.json(album);
});
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
