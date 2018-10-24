function playnow(){
  $.post( "http://178.128.222.109:5000/API/bot/request/", {
    "authToken": "kdjfklsfslkfsd",
    "cmd": "play",
  },
  console.log('')
  );
}

function pausenow(){
  $.post("https://rathumakara.supiritech.com/API/play"),{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "pause",
  }
}

function skipnow(){
  $.post("https://rathumakara.supiritech.com/API/skip",{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "skip",
  })
}

function volume_low(){
  $.post("https://rathumakara.supiritech.com/API/volume",{
    "authToken": "kdjfklsfslkfsd",
    "cmd": "volume",
    "args": "5"
  })
}

function volume_high(){
  $.post("https://rathumakara.supiritech.com/API/volume",{
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
    console.log('Set volume to 5!')
  });

  $('#btn-vol-low').on('click', function(e) {
    volume_low();
    console.log('Set volume to 100!')
  });



 