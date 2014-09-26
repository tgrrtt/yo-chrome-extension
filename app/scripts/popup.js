
$(function(){
  $('#yo-button').on('click', function(){
    var username = $('#username').val();
    $.post('http://api.justyo.co/yo/', {
      api_token: '410958b8-b7da-3856-65d9-d5ee2d934559',
      username: username
    });
  });
});
