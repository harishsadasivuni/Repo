var countofwrong = 0;
var countofcorrect = 0;
(function(){
  var finalanswer = setmul();
  var sentmsg = document.getElementById("msg");
  var submit = document.getElementById("submit");
  var givenanswer = document.getElementById("answer");
  submit.onclick = function(e){
  e.preventDefault();
  var givenvalue = givenanswer.value;
  console.log(givenvalue);
    if(finalanswer == givenvalue){
      correctlist();
      finalanswer = setmul();
    }else{
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
  console.log("correct val is "+val);
  switch (val) {
    case 0:
      newmsg = "Nice Yasaswini!";
      break;
    case 2:
      newmsg = "Good Yasaswini!";
      break;
    case 3:
      newmsg = "Yasaswini is a good girl!";
      break;
    case 1:
      newmsg = "Yasaswini is good at tables!";
      break;
  }
  var sentmsg = document.getElementById("msg");
  var givenanswer = document.getElementById("answer");
  givenanswer.style.borderColor = "green";
  givenanswer.style.backgroundColor = "#b6ffc3";
  sentmsg.innerHTML = newmsg;
  var countercorrect = document.getElementById("cro");
  countofcorrect++;
  countercorrect.innerHTML = countofcorrect;
  givenanswer.value = '';
}
function wronglist(){
  var val = Math.floor(Math.random() * 4);
  console.log("wrong val is "+val);
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
    case 0:
      newmsg = "Yasaswini...Learn Tables!";
      break;
  }
  var sentmsg = document.getElementById("msg");
  sentmsg.innerHTML = newmsg;
  var givenanswer = document.getElementById("answer");
  givenanswer.style.borderColor = "red";
  givenanswer.style.backgroundColor = "#ffe0e0";
  var counterwrong = document.getElementById("wro");
  countofwrong++;
  counterwrong.innerHTML = countofwrong;
}