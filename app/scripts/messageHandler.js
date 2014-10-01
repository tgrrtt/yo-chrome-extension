$(function(){
  var firebase = new Firebase('https://yo-chrome.firebaseio.com/');
  firebase.child(MY_USERNAME).on('child_added', function(snapshot){
    var data = snapshot.val();
    console.log(data['yo from']);
    snapshot.ref().remove();
  });
});