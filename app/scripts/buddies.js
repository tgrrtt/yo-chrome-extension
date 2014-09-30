$(function(){

  var yoColors = ['#86BE95', '#FE51D5', '#5E2ECC', '#00F6AD', '#AFB109', '#18A2E9', '#CB1136', '#67D3D6', '#3BCE58', '#5E76D0'];

  // on load get buddies from buddylist and display
  var buddyList = JSON.parse(localStorage.getItem('buddies'));
  console.log(buddyList);
  var shuffledColors = _.shuffle(yoColors);
  for (var i = 0; i < buddyList.length; i++){
    var $buddy = $('<tr>').append($('<td>').text(buddyList[i]));
    $buddy.css('background-color', shuffledColors[i % buddyList.length]);
    $('#buddy-list').append($buddy);
  }
});