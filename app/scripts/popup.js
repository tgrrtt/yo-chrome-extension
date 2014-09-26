$(function(){
  $('#yo-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $.post('http://api.justyo.co/yo/', {
      api_token: secretkey,
      username: username
    }, function(){
      $('#username').val('');
      $('#err-msg').hide();
    }).fail(function(){
      $('#err-msg').show();
    });
  });
});
