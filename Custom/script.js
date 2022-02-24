(function(){
  var finalanswer = setmul();
  var sentmsg = document.getElementById("msg");
  var submit = document.getElementById("submit");
  var givenanswer = document.getElementById("answer");
  submit.onclick = function(e){
  e.preventDefault()
  var givenvalue = givenanswer.value;
  console.log(givenvalue);
    if(finalanswer == givenvalue){
      sentmsg.innerHTML = "Hey You are correct!"
      correctlist();
      finalanswer = setmul();
    }else{
      sentmsg.innerHTML = "Hey You are wrong!"
      wronglist();
    }
  };
})();
function setmul(){
  var first = Math.floor(Math.random() * 16);
  var second = Math.floor(Math.random() * 10);
  var finalanswer = first * second;
  var sendnumber = document.getElementById("question");
  var sendstring = "How much is "+first+" X "+second+" ?";
  sendnumber.innerHTML = sendstring;
  return finalanswer;
}
function correctlist(){
  var val = Math.floor(Math.random() * 4);
  switch (val) {
    case 1:
      newmsg = "Nice Yasaswini!";
      break;
    case 2:
      newmsg = "Good Yasaswini!";
      break;
    case 3:
      newmsg = "Yasaswini is a good girl!";
      break;
    case 4:
      newmsg = "Yasaswini is good at tables!";
      break;
  }
  var sentmsg = document.getElementById("msg");
  sentmsg.innerHTML = newmsg;
}
function wronglist(){
  var val = Math.floor(Math.random() * 4);
  switch (val) {
    case 1:
      newmsg = "Yasaswini is a bad girl!";
      break;
    case 2:
      newmsg = "Yasaswini Don't Know Tables!";
      break;
    case 3:
      newmsg = "Wrong Yasaswini!";
      break;
    case 4:
      newmsg = "Yasaswini...Learn Tables!";
      break;
  }
  var sentmsg = document.getElementById("msg");
  sentmsg.innerHTML = newmsg;
}