document.getElementById("player1").addEventListener("click", fistCallMe)
document.getElementById("player2").addEventListener("click", secoundCallMe)
document.getElementById("player3").addEventListener("click", therdCallMe)

let pxcountwidth = 155, pxcountheight = 210, ball, ballStop;
ball = document.getElementById("ball");

function fistCallMe() {
    if (pxcountwidth == 155) {
        pyr1Srart();
    }
    else {
        alert("Sorry, Ball is another player");
    }
}

function secoundCallMe() {
    if (pxcountwidth == 1085) {
        pyr2Srart();
    }
    else {
        alert("Sorry, Ball is another player");
    }
}

function therdCallMe() {
    if (pxcountwidth == 500) {
        pxcountwidth = 505;
        pyr3Srart();
    }
    else {
        alert("Sorry, Ball is another player");
    }
}


function pyr1Srart() {
    ballStop = setInterval(myplayerone, 5)
}

function myplayerone() {
    pxcountwidth += 5;
    ball.style.left = pxcountwidth + "px";

    if (pxcountwidth == 1085) {
        clearInterval(ballStop)
    }
}


function pyr2Srart() {
    ballStop = setInterval(myplayertwo, 20)
}

function myplayertwo() {
    pxcountheight += 4.8;
    ball.style.top = pxcountheight + "px";
    pxcountwidth -= 15;
    ball.style.left = pxcountwidth + "px";

    if (pxcountwidth == 500) {
        clearInterval(ballStop)
    }
}


function pyr3Srart() {
    ballStop = setInterval(myplayerthree, 10)
}
function myplayerthree() {
    pxcountheight -= 3.7;
    pxcountwidth -= 7;
    ball.style.top = pxcountheight + "px";
    ball.style.left = pxcountwidth + "px";

    if (pxcountwidth == 155) {
        clearInterval(ballStop)
    }
}