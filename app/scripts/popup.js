$(function(){
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    handleForm(tabs[0].url);
  });

  function handleForm(tablink) {
    //alert(tablink);
    $("#link").val(tablink)
    var url = $('#link').val() || 'http://optional-link.com';

    $('#yo-form').submit(function(event){
      event.preventDefault();
      var username = $('#username').val();
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
    });
  }



  // $("#link").val(tabUrl)
  // var url = $('#link').val() || 'http://optional-link.com';

  // $('#yo-form').submit(function(event){
  //   event.preventDefault();
  //   var username = $('#username').val();
  //   $.post('http://api.justyo.co/yo/', {
  //     api_token: secretkey,
  //     link: url,
  //     username: username
  //   }, function(){
  //     $('#username').val('');
  //     $('#err-msg').hide();
  //   }).fail(function(){
  //     $('#err-msg').show();
  //   });
  // });
});
