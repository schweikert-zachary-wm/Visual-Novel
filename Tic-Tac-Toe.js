
var turn = 0;
var turnPlayer = "x";

var topLeft = "___";
var topCenter = "___";
var topRight = "___";
var middleLeft = "___";
var middleCenter = "___";
var middleRight = "___";
var bottomLeft = "___";
var bottomCenter = "___";
var bottomRight = "___";

function win2 () { alert(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "Player " + turnPlayer + " Wins")}

function win () {
    if (topLeft == " x " && topCenter == " x " && topRight == " x ") { win2(); throw("Game Over")}               ///
    if (middleLeft == " x " && middleCenter == " x " && middleRight == " x ") { win2(); throw("Game Over")}      ///  horizontal victories x
    if (bottomLeft == " x " && bottomCenter == " x " && bottomRight == " x ") { win2(); throw("Game Over")}      ///

    if (topLeft == " x " && middleLeft == " x " && bottomLeft == " x ") { win2(); throw("Game Over")}           ///
    if (topCenter == " x " && middleCenter == " x " &&  bottomCenter == " x ") { win2(); throw("Game Over")}    ///  Vertical victories x
    if (topRight == " x " && middleRight == " x " && bottomRight == " x ") { win2(); throw("Game Over")}        ///

    if (topLeft == " x " && middleCenter == " x " && bottomRight == " x ") { win2(); throw("Game Over")}        ///  diagonal victories x
    if (topRight == " x " && middleCenter == " x " && bottomRight == " x ") { win2(); throw("Game Over")}       ///

    if (topLeft == " o " && topCenter == " o " && topRight == " o ") { win2(); throw("Game Over")}               ///
    if (middleLeft == " o " && middleCenter == " o " && middleRight == " o ") { win2(); throw("Game Over")}      ///  horizontal victories o
    if (bottomLeft == " o " && bottomCenter == " o " && bottomRight == " o ") { win2(); throw("Game Over")}      ///

    if (topLeft == " o " && middleLeft == " o " && bottomLeft == " o ") { win2(); throw("Game Over")}           ///
    if (topCenter == " o " && middleCenter == " o " &&  bottomCenter == " o ") { win2(); throw("Game Over")}    ///  Vertical victories o
    if (topRight == " o " && middleRight == " o " && bottomRight == " o ") { win2(); throw("Game Over")}        ///

    if (topLeft == " o " && middleCenter == " o " && bottomRight == " o ") { win2(); throw("Game Over")}        ///  diagonal victories o
    if (topRight == " o " && middleCenter == " o " && bottomRight == " o ") { win2(); throw("Game Over")}       ///
}



function game () {

    var place = prompt(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "Where do you want to play?").toUpperCase();




    while (turnPlayer == "x") {



        if (place == "TOP LEFT" && topLeft != "___") { alert("This space is already taken")}                 //////////
        if (place == "TOP LEFT" && topLeft == "___") {topLeft = " x "; turn = turn + 1;turnCounter() }                                   //////
                                                                                                                              ///////
        if (place == "TOP CENTER" && topCenter != "___") { alert("This space is already taken")}                        ////////
        if (place == "TOP CENTER" && topCenter == "___") {topCenter = " x "; turn = turn + 1;turnCounter() }                                         // Top row
                                                                                                                               ////////
        if (place == "TOP RIGHT" && topRight != "___") { alert("This space is already taken")}                      ///////
        if (place == "TOP RIGHT" && topRight == "___") {topRight = " x "; turn = turn + 1;turnCounter() }                           /////////

        if (place == "MIDDLE LEFT" && middleLeft != "___") { alert("This space is already taken")}           ////////////
        if (place == "MIDDLE LEFT" && middleLeft == "___") {middleLeft = " x "; turn = turn + 1;turnCounter() }                       /////////////
                                                                                                                                ////////
        if (place == "MIDDLE CENTER" && middleCenter != "___") { alert("This space is already taken")}                      //////////
        if (place == "MIDDLE CENTER" && middleCenter == "___") {middleCenter = " x "; turn = turn + 1;turnCounter() }                             ///////////   Middle row
                                                                                                                                ///////////
        if (place == "MIDDLE RIGHT" && middleRight != "___") { alert("This space is already taken")}            ////////////////
        if (place == "MIDDLE RIGHT" && middleRight == "___") {middleRight = " x "; turn = turn + 1;turnCounter() }                 //////////////

        if (place == "BOTTOM LEFT" && bottomLeft != "___") { alert("This space is already taken")}                 //////////
        if (place == "BOTTOM LEFT" && bottomLeft == "___") {bottomLeft = " x "; turn = turn + 1;turnCounter() }                                   //////
                                                                                                                               ///////
        if (place == "BOTTOM CENTER" && bottomCenter != "___") { alert("This space is already taken")}                        ////////
        if (place == "BOTTOM CENTER" && bottomCenter == "___") {bottomCenter = " x "; turn = turn + 1;turnCounter() }                                         // bottom row
                                                                                                                                /////////
        if (place == "BOTTOM RIGHT" && bottomRight != "___") { alert("This space is already taken")}                      ///////
        if (place == "BOTTOM RIGHT" && bottomRight == "___") {bottomRight = " x "; turn = turn + 1;turnCounter() }

        place = 0;

        if (place == 0) { alert("Please enter a valid position."); place = 1; game()}

        function turnCounter () {
        if (turn < 9) {win();turnPlayer = "o"; game()}
        if (turn == 9) {win(); alert(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "The game is a tie!"); throw "Game ends in a draw."}
    }}

    while (turnPlayer == "o") {
        if (place == "TOP LEFT" && topLeft != "___") { alert("This space is already taken"); game()}                 //////////
        if (place == "TOP LEFT" && topLeft == "___") {topLeft = " o "; turn = turn + 1;turnCounterB() }                                   //////
                                                                                                                              ///////
        if (place == "TOP CENTER" && topCenter != "___") { alert("This space is already taken"); game()}                        ////////
        if (place == "TOP CENTER" && topCenter == "___") {topCenter = " o "; turn = turn + 1;turnCounterB() }                                         // Top row
                                                                                                                                ////////
        if (place == "TOP RIGHT" && topRight != "___") { alert("This space is already taken"); game()}                      ///////
        if (place == "TOP RIGHT" && topRight == "___") {topRight = " o "; turn = turn + 1;turnCounterB() }                           /////////


        if (place == "MIDDLE LEFT" && middleLeft != "___") { alert("This space is already taken"); game()}           ////////////
        if (place == "MIDDLE LEFT" && middleLeft == "___") {middleLeft = " o "; turn = turn + 1;turnCounterB() }                       /////////////
        ////////
        if (place == "MIDDLE CENTER" && middleCenter != "___") { alert("This space is already taken"); game()}                      //////////
        if (place == "MIDDLE CENTER" && middleCenter == "___") {middleCenter = " o "; turn = turn + 1;turnCounterB() }                             ///////////   Middle row
        ///////////
        if (place == "MIDDLE RIGHT" && middleRight != "___") { alert("This space is already taken"); game()}            ////////////////
        if (place == "MIDDLE RIGHT" && middleRight == "___") {middleRight = " o "; turn = turn + 1;turnCounterB() }                 //////////////

        if (place == "BOTTOM LEFT" && bottomLeft != "___") { alert("This space is already taken"); game()}                 //////////
        if (place == "BOTTOM LEFT" && bottomLeft == "___") {bottomLeft = " o "; turn = turn + 1;turnCounterB() }                                   //////
        ///////
        if (place == "BOTTOM CENTER" && bottomCenter != "___") { alert("This space is already taken"); game()}                        ////////
        if (place == "BOTTOM CENTER" && bottomCenter == "___") {bottomCenter = " o "; turn = turn + 1;turnCounterB() }                                         // bottom row
        /////////
        if (place == "BOTTOM RIGHT" && bottomRight != "___") { alert("This space is already taken"); game()}                      ///////
        if (place == "BOTTOM RIGHT" && bottomRight == "___") {bottomRight = " o "; turn = turn + 1;turnCounterB() }                           /////////


        place = 0;

        if (place == 0) { alert("Please enter a valid position."); place = 1; game()}

        function turnCounterB () {
            if (turn < 9) {win();turnPlayer = "x"; game()}
            if (turn == 9) {win(); alert(topLeft + " " + topCenter + " " + topRight + "\n" + middleLeft + " " + middleCenter + " " + middleRight + "\n" + bottomLeft + " " + bottomCenter + " " + bottomRight + "\n" + "The game is a tie!"); throw "Game ends in a draw."}
        }
    }




}

game();