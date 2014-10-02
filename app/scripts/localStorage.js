var getValues = function() {
  chrome.storage.local.get(['apiKey', 'userName'], function(data) {
    if (data.apiKey > '') {
      $('#apikey').val(data.apiKey);
    }
    if (data.userName > '') {
      $('#username').val(data.userName);
    }
  });
}
$('#username').on('keyup', function() {
  chrome.storage.local.set({
    userName: $('#username').val()
  });
})
$('#apikey').on('keyup', function() {
  chrome.storage.local.set({
    apiKey: $('#apikey').val()
  });
})
getValues();