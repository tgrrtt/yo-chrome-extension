$(function(){
  // set form url to window url
  function inputUrl(tabUrl) {
    $('#link').val(tabUrl);
  }

  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    inputUrl(tabs[0].url);
    //chrome.extension.getBackgroundPage().console.log("yo");
  });

  $('#yo-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    var url = $('#link').val();
    if($("#send-url").is(':checked')) {
      $.post('http://api.justyo.co/yo/', {
        api_token: secretkey,
        link: url,
        username: username
      }, function(){
        $('#username').val('');
        $('#err-msg').hide();
      }).fail(function(){
        $('#err-msg').show();
      });
      //chrome.extension.getBackgroundPage().console.log("sendurl checked");
    } else {
      //chrome.extension.getBackgroundPage().console.log("sendurl  not checked");
      $.post('http://api.justyo.co/yo/', {
        api_token: secretkey,
        username: username
      }, function(){
        $('#username').val('');
        $('#err-msg').hide();
      }).fail(function(){
        $('#err-msg').show();
      });
    }
  });
});
