$(function(){
  var yoColors = ['#86BE95', '#FE51D5', '#5E2ECC', '#00F6AD', '#AFB109', '#18A2E9', '#CB1136', '#67D3D6', '#3BCE58', '#5E76D0'];
  var yoColorsLight = ['#8FCBA0', '#fe68e7', '#6839cc', '#3ff6c0', '#bdbf09', '#3cade9', '#cb395a', '#7ed3d6', '#55ce68', '#748ad0'];

  // on load get buddies from buddylist and display
  var buddyList = JSON.parse(localStorage.getItem('buddies'));
  var shuffledColors = _.shuffle(yoColors);
  if (buddyList){
    for (var i = 0; i < buddyList.length; i++){
      var $buddy = $('<tr>').append($('<td>').append($('<a>').attr('href', '#').text(buddyList[i])));
      $buddy.css('background-color', shuffledColors[i % buddyList.length]);
      $('.buddy-list').append($buddy);
    }
  }

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
    
    var buddyList = JSON.parse(localStorage.getItem('buddies'));
    if (!buddyList) { buddyList = []; }
    var buddyIndex = buddyList.indexOf(username);
    if (buddyIndex === -1){
      buddyList.unshift(username);
      localStorage.setItem('buddies', JSON.stringify(buddyList));
      var $buddy = $('<tr>').append($('<td>').append($('<a>').attr('href', '#').text(username)));
      $buddy.css('background-color', yoColors[Math.floor(Math.random() * 10)]);
      $('.buddy-list').prepend($buddy);
    } else if (buddyIndex >= 0){
      // move buddy to the front of the array
      buddyList.splice(buddyIndex, 1);
      buddyList.unshift(username);
      localStorage.setItem('buddies', JSON.stringify(buddyList));
    }
  });

  // auto-fill buddy name
  $('.buddy-list a').on('click', function(e){
    e.preventDefault();
    var buddyName = $(this).text();
    $('#username').val(buddyName);
  });
  
});
