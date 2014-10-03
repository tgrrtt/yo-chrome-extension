var firebase = new Firebase('https://yo-chrome.firebaseio.com/');

firebase.child(MY_USERNAME).on('child_added', function(snapshot){
  var data = snapshot.val();
  var yoId = '' + new Date() + data['yo from'];
  var options = {
    type: "basic",
    title: "NEW YO RECEIVED",
    message: "New Yo from " + data['yo from'],
    iconUrl: "../images/icon-128.png"
  };
  if (data['link']){
    options.buttons = [{ title: "With a link!" }];
  }
  chrome.notifications.create(yoId, options, function(){
    console.log('sent notif');
  });
  snapshot.ref().remove();
});
