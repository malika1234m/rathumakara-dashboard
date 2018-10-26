var songName;

function playnow(){
  $.post("http://178.128.222.109:5000/API/bot/request/", {
    "authToken": "kdjfklsfslkfsd",
    "cmd": "play",
  });
}

function pausenow(){
  $.post("http://178.128.222.109:5000/API/bot/request/", {
    "authToken": "kdjfklsfslkfsd",
    "cmd": "pause",
  });
}

function skipnow(){
  $.post("http://178.128.222.109:5000/API/bot/request/",{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "skip",
  })
}

function volume_low(){
  $.post("http://178.128.222.109:5000/API/bot/request/",{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "volume",
    "args": "5"
  })
}

function volume_high(){
  $.post("http://178.128.222.109:5000/API/bot/request/",{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "volume",
    "args": "100"
  })
}

//progress bar
function getprogress(){
    $.get("https://rathumakara.supiritech.com/API/progress", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
});
}


function addToQueue(){
    $("#queueitem").text(songName);
}



//Youtube Dats API v3

function keyWordsearch(){
  gapi.client.setApiKey('AIzaSyBpkvDP5X_E0D3Jdzq-14SVugYzdaF82AQ');
  gapi.client.load('youtube', 'v3', function() {
          makeRequest();
  });
}
function makeRequest() {
      var q = $('#req').val();
      var request = gapi.client.youtube.search.list({
              q: q,
              part: 'snippet', 
              maxResults: 1
      });
      request.execute(function(response) {                                                                                    
              $('#results').empty()
              var srchItems = response.result.items;                      
              $.each(srchItems, function(index, item) {
              vidTitle = item.snippet.title;  
              vidId = item.id.videoId;
              console.log('https://www.youtube.com/watch?v='+vidId);
              vidThumburl =  item.snippet.thumbnails.default.url; 
              var thumbUrl = vidThumburl;
              songName = vidTitle;
              console.log(songName);
              console.log(thumbUrl);
              $("#ytthumb").attr("src",thumbUrl);
              $("#ytname").text(songName);
              vidThumbimg = '<pre><img id="thumb" src="'+vidThumburl+'" alt="No Image Available." style="width:204px;height:128px"></pre>'
              $('#results').append('<pre>' + vidTitle + vidThumbimg + '</pre>');                      
      })  
})  
}



$('#btn-play').on('click', function(e) {
    playnow();
    console.log('Playing now!')
  });


  $('#btn-pause').on('click', function(e) {
    pausenow();
    console.log('Paused!')
  });

  $('#btn-skip').on('click', function(e) {
    skipnow();
    console.log('Track Skipped!')
  });

  $('#btn-vol-high').on('click', function(e) {
    volume_high();
    console.log('Set volume to 100!')
  });

  $('#btn-vol-low').on('click', function(e) {
    volume_low();
    console.log('Set volume to 5!')
  });
  
   $('#btn-queue').on('click', function(e) {
    addToQueue();
    console.log('Set volume to 5!')
  });

  /*
  $('#btn-req').on('click', function(e) {
    request();
    keyWordsearch();
    console.log('Set volume to 5!')
  });
*/
