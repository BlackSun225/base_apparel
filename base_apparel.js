const myregex = /[a-z0-9]+@[a-z]+\.[a-z]+/g;
$(document).ready(function(){
  $('button').mouseenter(function(){
    if(!$('input').val().match(myregex)) {
      $('#error').show();
      $('.alert').show();
    }else {
      $("#error").hide();
      $('.alert').hide();
    }
  })
});