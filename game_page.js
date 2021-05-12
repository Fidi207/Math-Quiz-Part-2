player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1Name").innerHTML = player1_name +  ":";
document.getElementById("player2Name").innerHTML = player2_name +  ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1_name + ", Enter The Question";
document.getElementById("player_answer").innerHTML = player2_name + ", Enter The Answer";

function send(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    symbol=document.getElementById("symbool").value;
    numbers = num1 + "  " + symbol + "  " + num2;
    
    questionTag= '<h4 id="mathQuestion">Q. ' + numbers + '</h4> <br>';
    inputTag= 'Answer. <input id="answer" type="text"> <br> <br>';
    buttonTag= '<button class= "btn btn-danger" onclick="check()">Check Answer</button>';

    row= questionTag+ inputTag+ buttonTag;
    document.getElementById("output").innerHTML= row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("symbol").value = "";
}