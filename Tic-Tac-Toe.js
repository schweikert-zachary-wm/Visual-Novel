
var turn = 0;
var turnPlayer = "x";

var winner = "x";

var topLeft = "___";
var topCenter = "___";
var topRight = "___";
var middleLeft = "___";
var middleCenter = "___";
var middleRight = "___";
var bottomLeft = "___";
var bottomCenter = "___";
var bottomRight = "___";

function game () {
    var place = prompt(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "Where do you want to play?").toUpperCase();




    if (turnPlayer == "x") {
        if (place == "TOP LEFT" && topLeft != "___") { alert("This space is already taken"); game()}                 //////////
        if (place == "TOP LEFT" && topLeft == "___") {topLeft = " x "; turn = turn + 1 }                                   //////
                                                                                                                              ///////
        if (place == "TOP CENTER" && topCenter != "___") { alert("This space is already taken"); game()}                        ////////
        if (place == "TOP CENTER" && topCenter == "___") {topCenter = " x "; turn = turn + 1 }                                         // Top row
                                                                                                                               ////////
        if (place == "TOP RIGHT" && topRight != "___") { alert("This space is already taken"); game()}                      ///////
        if (place == "TOP RIGHT" && topRight == "___") {topRight = " x "; turn = turn + 1 }                           /////////


        if (place == "MIDDLE LEFT" && middleLeft != "___") { alert("This space is already taken"); game()}
        if (place == "MIDDLE LEFT" && middleLeft == "___") {middleLeft = " x "; turn = turn + 1 }

        if (place == "MIDDLE CENTER" && middleCenter != "___") { alert("This space is already taken"); game()}
        if (place == "MIDDLE CENTER" && middleCenter == "___") {middleCenter = " x "; turn = turn + 1 }

        if (place == "MIDDLE RIGHT" && middleRight != "___") { alert("This space is already taken"); game()}
        if (place == "MIDDLE RIGHT" && middleRight == "___") {middleRight = " x "; turn = turn + 1 }


        if (turn < 5) {turnPlayer = "x";game()}
        if (turn == 5) {alert(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "The winner is " + winner + "!"); throw "Game ends in a draw."}
    }


}

game();