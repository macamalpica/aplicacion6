// JavaScript Document
  $(document).ready(function (e){
  document.addEventListener ("devicereadry",function(){

  $('#beep').tap(function (){
  navigator .notification.beep (1);
  });//Tap beep

  $('#vibrar').tap(function (){
  navigator .notification.vibrate (1000);
  });//Tap vibrar

  },false); //deviceready
  }); //Ready