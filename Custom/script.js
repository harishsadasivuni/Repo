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
  switch (val) {
    case 0:
      newmsg = "Nice Yasaswini!";
      imagesetter = "success1.png";
      break;
    case 2:
      newmsg = "Good Yasaswini!";
      imagesetter = "success2.webp";
      break;
    case 3:
      newmsg = "Yasaswini is a good girl!";
      imagesetter = "success3.png";
      break;
    case 1:
      newmsg = "Yasaswini is good at tables!";
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
  console.log("wrong val is "+val);
  switch (val) {
    case 1:
      newmsg = "Yasaswini is a bad girl!";
      imagesetter = "failure1.png";
      break;
    case 2:
      newmsg = "Yasaswini Don't Know Tables!";
      imagesetter = "failure2.png";
      break;
    case 3:
      newmsg = "Wrong Yasaswini!";
      imagesetter = "failure3.gif";
      break;
    case 0:
      newmsg = "Yasaswini...Learn Tables!";
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