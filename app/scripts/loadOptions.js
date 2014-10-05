chrome.storage.local.get(['userName'], function(
data) {
  if (data.userName > '') {
    $('#username').val(data.userName);
  }
});
