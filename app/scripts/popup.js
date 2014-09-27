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
    var opts = {
      api_token: secretkey,
      username: username
    }
    // Add a link key to opts if send-link is checked.
    if($("#send-url").is(':checked')) {
      opts.link = $('#link').val();
    }
    $.post('http://api.justyo.co/yo/', opts, function(){
      $('#username').val('');
      $('.err-msg').hide();
    }).fail(function(){
      $('.err-msg').show();
    });
  });
});
