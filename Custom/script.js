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
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function setmul(){
  var first = Math.floor( randomIntFromInterval(1, 18)/*Math.random() * 18*/);
  var second = Math.floor( randomIntFromInterval(1, 10)/*Math.random() * 10*/);
  var finalanswer = first * second;
  var sendnumber = document.getElementById("question");
  var sendstring = "How much is "+first+" x "+second+" ?";
  sendnumber.innerHTML = sendstring;
  return finalanswer;
}
function correctlist(){
  var val = Math.floor(Math.random() * 4);
  console.log("correct val is "+val);
  var imagesetter = "";
  var playernameholder = document.getElementById("playername").value;
  var playername = (playernameholder != null && playernameholder != "") ?  playernameholder : "Yasaswini";
  switch (val) {
    case 0:
      newmsg = "Great "+playername +"!";
      imagesetter = "success1.png";
      break;
    case 2:
      newmsg = "Good "+playername+"!";
      imagesetter = "success2.webp";
      break;
    case 3:
      newmsg = playername+" is a master at tables!";
      imagesetter = "success3.png";
      break;
    case 1:
      newmsg = playername+" is good at tables!";
      imagesetter = "success4.png";
      break;
  }
  var sentmsg = document.getElementById("msg");
  var givenanswer = document.getElementById("answer");
  var imager = document.getElementById("imager");
  givenanswer.style.borderColor = "green";
  givenanswer.style.backgroundColor = "#b6ffc3";
  imager.setAttribute("src", imagesetter);
  sentmsg.innerHTML = newmsg;
  var countercorrect = document.getElementById("cro");
  countofcorrect++;
  countercorrect.innerHTML = countofcorrect;
  givenanswer.value = '';
}
function wronglist(){
  var val = Math.floor(Math.random() * 4);
  var imagesetter = "";
  var playernameholder = document.getElementById("playername").value;
  var playername = (playernameholder != null && playernameholder != "") ?  playernameholder : "Yasaswini";
  console.log("wrong val is "+val);
  switch (val) {
    case 1:
      newmsg = playername+" is a bad at tables!";
      imagesetter = "failure1.png";
      break;
    case 2:
      newmsg = playername+" don't Know Tables!";
      imagesetter = "failure2.png";
      break;
    case 3:
      newmsg = "Wrong "+playername+"!";
      imagesetter = "failure3.gif";
      break;
    case 0:
      newmsg = playername+"...Learn Tables!";
      imagesetter = "failure4.gif";
      break;
  }
  var sentmsg = document.getElementById("msg");
  var imager = document.getElementById("imager");
  sentmsg.innerHTML = newmsg;
  imager.setAttribute("src", imagesetter);
  var givenanswer = document.getElementById("answer");
  givenanswer.style.borderColor = "red";
  givenanswer.style.backgroundColor = "#ffe0e0";
  var counterwrong = document.getElementById("wro");
  countofwrong++;
  counterwrong.innerHTML = countofwrong;
}