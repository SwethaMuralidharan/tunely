
var sampleAlbums = [{
  artistName: 'Ladyhawke',
  name: 'Ladyhawke',
  releaseDate: '2008, November 18',
  genres: [ 'new wave', 'indie rock', 'synth pop' ]
}, {
  artistName: 'The Knife',
  name: 'Silent Shout',
  releaseDate: '2006, February 17',
  genres: [ 'synth pop', 'electronica', 'experimental' ]
}, {
  artistName: 'Juno Reactor',
  name: 'Shango',
  releaseDate: '2000, October 9',
  genres: [ 'electronic', 'goa trance', 'tribal house' ]
}, {
  artistName: 'Philip Wesley',
  name: 'Dark Night of the Soul',
  releaseDate: '2008, September 12',
  genres: [ 'piano' ]
}];


$(document).ready(function() {
  console.log('app.js loaded!');


  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: OnSuccess,
    error: OnError
  });


function OnSuccess(albums) {
  console.log(albums);
  albums.forEach(function(album) {
    renderAlbum(album);
  });
};

function OnError(err){
  console.log('error occured: ', err);
};


$('form.form-horizontal').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    $.ajax({
      method:'POST',
      url:'/api/albums',
      data:formData,
      success: handleNewAlbumCreation,
      error: handleNewAlbumError
    })
    $(this).trigger("reset");
  });
  function handleNewAlbumCreation(album){
    renderAlbum(album);
  }
  function handleNewAlbumError(err){
    console.log("New Album Creation Error ",err);
  }

  function renderAlbum(album) {

    // HTML template string for each album
    var listOfAlbums = `
      <!-- one album -->
      <div class="row album">
        <div class="col-md-10 col-md-offset-1">
          <div class="panel panel-default">
            <div class="panel-body">
            <!-- begin album internal row -->
              <div class='row'>
                <div class="col-md-3 col-xs-12 thumbnail album-art">
                  <img src="images/800x800.png" alt="album image">
                </div>
                <div class="col-md-9 col-xs-12">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h4 class='inline-header'>Album Name:</h4>
                      <span class='album-name'>${ album.name }</span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Artist Name:</h4>
                      <span class='artist-name'>${ album.artistName }</span>
                    </li>
                    <li class="list-group-item">
                      <h4 class='inline-header'>Released date:</h4>
                      <span class='album-releaseDate'>${ album.releaseDate }</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- end of album internal row -->
              <div class='panel-footer'>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end one album -->
    `;


    $('#albums').append(listOfAlbums);
  }
});
