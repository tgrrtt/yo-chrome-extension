$(document).ready(function() {
  $('#opt-form').on('submit', function(event) {
    event.preventDefault();
    var YOSERNAME = $('#YOSERNAME').val();
    var YONUMBER = $('#YONUMBER').val();
    var YOPIKEY = $('#YOPIKEY').val();
    console.log(YOSERNAME);
    chrome.storage.local.set({
      userName: YOSERNAME,
      phoneNumber: YONUMBER,
      apiKey: YOPIKEY
    }, function() {
      $('#opt-button').text('(Saved)');
    });
  });
  chrome.storage.local.get(['apiKey', 'userName', 'phoneNumber'], function(
    data) {
    if (data.apiKey > '' || data.userName > '' || data.phoneNumber > '') {
      $('#YOPIKEY').val(data.apiKey);
      $('#YOSERNAME').val(data.userName);
      $('#YONUMBER').val(data.phoneNumber);
    }
  });
  $('.form-control').on('keydown', function(e) {
    if (e.which !== 9) {
      $('#opt-button').text('Save');
    }
  });
});

