$(document).ready(function (){
  $('#text-area').on('keyup', function(event){
    if (event.keyCode === 13) {
      event.preventDefault();
     $("#submit-button").click();
    };
  })
})