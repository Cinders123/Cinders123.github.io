function liagame() {
alert("Welcome to the Quest of a life time")
prompt("Are you ready to play?")
alert("If you would like to then stay if not then leave!")
var askname = prompt("What is your name?");
confirm("Lovly to meet you " + askname + " I am your Queen and I need you to get back to my castle as soon as you can,");
alert("At the moment you are in the forist");
var quest = prompt("will you sleep or go now?");
switch (quest) {


    case "go now":
	alert("You walk along a foist trail and meet a furoishious and hungry dragon");
	var fight = prompt("Will yor fight the dragon or run");

if(fight==="Run")
{
alert("You run and see the castle on the horrison, you run some more and the you compleat your quest. Wll done!");
}
else {
//if("fight");
alert("You fight the dragon but find your provishions are missing, the dragon took them when you were unconshious. You are ingered but you carry on. You see the castle ahead so you limp on. However you faint.");

    
alert("You wake up and limp toward the castle. You arrive and get medical attention and compleat your quest. Well Done!")
      }
      break;
      
case"sleep":
alert("In the morning you wake up and find you provisions are gone ");
var look = prompt("Will you look for them or carry on ");
if(look==="look for them"){
alert("You look for provisions but don't find them");alert ("But you do see the castle, You go and compleat your quest. Well Done!");
  
}
    else
    {
prompt("Will you sleep or carry on");
if("carry on");
alert("you carry on and compleat your quest. Well Done!");
    }
if("sleep");
alert("You sleep and then wake up, You carry on and the compleat your quest. Well Done");
break;
}


}