

var topLeft = "___";
var topCenter = "___";
var topRight = "___";
var middleLeft = "___";
var middleCenter = "___";
var middleRight = "___";
var bottomLeft = "___";
var bottomCenter = "___";
var bottomRight = "___";

var place = prompt(topLeft + " " + topCenter + " " +  topRight + "\n" + middleLeft + " " + middleCenter + " " +  middleRight + "\n" + bottomLeft + " " + bottomCenter + " " +  bottomRight + "\n" + "Where do you want to play?").toUpperCase();

var turn = "x";


if (turn == "x") {
    if (place == "TOP LEFT") { topLeft = " x "}
    if (place == "TOP CENTER") {topCenter = " x "}
    if (place == "TOP RIGHT") {topRight = " x "}
    if (place == "MIDDLE LEFT") {middleLeft = " x "}
    if (place == "MIDDLE CENTER") {middleCenter = " x "}
    if (place == "MIDDLE RIGHT") {middleRight = " x "}
    if (place == "BOTTOM LEFT") {bottomLeft = " x "}
    if (place == "BOTTOM CENTER") {bottomCenter = " x "}
    if (place == "Bottom Right") {bottomRight = " x "}



    if (turn < 4) {
        turn = "o" }
}

if (turn == "o") {
    if (place == "TOP LEFT") { topLeft = " o "}
    if (place == "TOP CENTER") {topCenter = " o "}
    if (place == "TOP RIGHT") {topRight = " o "}
    if (place == "MIDDLE LEFT") {middleLeft = " o "}
    if (place == "MIDDLE CENTER") {middleCenter = " o "}
    if (place == "MIDDLE RIGHT") {middleRight = " o "}
    if (place == "BOTTOM LEFT") {bottomLeft = " o "}
    if (place == "BOTTOM CENTER") {bottomCenter = " o "}
    if (place == "Bottom Right") {bottomRight = " o "}

    turn = "x"
}