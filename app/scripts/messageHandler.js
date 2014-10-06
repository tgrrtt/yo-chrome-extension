var firebase = new Firebase('https://yo-chrome.firebaseio.com/');
chrome.storage.local.get(['userName'], function(data) {
  firebase.child(data.userName).child('yos').on('child_added', function(snapshot){
    var data = snapshot.val();
    var yoId = '' + new Date() + data['yo from'];
    var options = {
      type: "basic",
      title: "NEW YO RECEIVED",
      message: "New Yo from " + data['yo from'],
      iconUrl: "../images/icon-128.png"
    };
    chrome.notifications.create(yoId, options, function(){
      console.log('sent notif');
    });
    snapshot.ref().remove();
  }); 
});
