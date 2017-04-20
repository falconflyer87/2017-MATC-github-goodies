/**
 * Created by mac on 2/23/17.
 */
// JavaScript Document

var cardsflipped = 0;
var cardonetype = 0;
var cardtwotype = 0;
var flippedone;
var flippedtwo;
var score = 0;

function turnCard(itemid, cardtext, connection){
    "use strict";
    var mycard = document.getElementById(itemid);
    mycard.style.background = "none";
    mycard.style.backgroundColor = "#FFFFFF";
    mycard.firstChild.innerHTML = cardtext;
    cardsflipped ++;
    //alert("card is flipped" + cardsflipped);

    if(cardsflipped <= 1){
        cardonetype = connection;
        flippedone = itemid;
    }
    if(cardsflipped >= 2){
        cardtwotype = connection;
        flippedtwo = itemid;
        if(cardonetype === cardtwotype){

            document.getElementById("theresult").innerHTML = "It's a Match! <a href='javascript: nextTurn()'>Go Again!</a>";
            document.getElement
            score += 5;
            document.getElementById("myscore").innerHTML = score
        }
        else{

            document.getElementById("theresult").innerHTML = "No Match! <a href='javascript: wrongAnswer()'>Try Again!</a>";


        }
    }
}

function nextTurn() {
    document.getElementById(flippedone).style.display = "none";
    document.getElementById(flippedtwo).style.display = "none";
    document.getElementById("theresult").innerHTML = "";
    cardsflipped = 0;
}

function wrongAnswer() {
    cardonetype = 0;
    cardtwotype = 0;

    document.getElementById("theresult").innerHTML = "";

    document.getElementById(flippedone).firstChild.innerHTML = "";
    document.getElementById(flippedtwo).firstChild.innerHTML = "";
    document.getElementById(flippedone).style.background = "none";
    document.getElementById(flippedtwo).style.background = "none";
    document.getElementById(flippedone).style.backgroundImage = "url('thecard.png')";
    document.getElementById(flippedtwo).style.backgroundImage = "url('thecard.png')";
    cardsflipped = 0;
}

