var config = {
    apiKey: "AIzaSyDVOnepiOLoGlTYtuN7b7ZR0J_zMs20EvA",
    authDomain: "rock-paper-scissors-83eba.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-83eba.firebaseio.com",
    projectId: "rock-paper-scissors-83eba",
    storageBucket: "rock-paper-scissors-83eba.appspot.com",
    messagingSenderId: "293978328306"
  };

firebase.initializeApp(config);

var database = firebase.database();
var playersRef = database.ref("players");
var playerOneRef = database.ref("players/one");
var playerTwoRef = database.ref("players/two");
var chat = database.ref("chat"); 
var connectionsRef = database.ref("/connections");
var isConnectedRef = database.ref(".info/connected");

var playerOneName = "";
var playerTwoName = "";
var playerOneWins = 0;
var playerTwoWins = 0;
var playerOneLoss = 0;
var playerTwoLoss = 0;

isConnectedRef.on("value", function(snap) {

if (snap.val()) {

        var con = connectionsRef.push(true);
        con.onDisconnect().remove(); 

    }

}); 

connectionsRef.on("value", function(snap) {

    var numberOfPlayers = snap.numChildren(); 
    console.log(numberOfPlayers); 

});


$("#name-submit-button").on("click", function(event) {
    

    event.preventDefault();
    var playerName = $("#name-input").val().trim();
    $("#name-input").val("")
    console.log(playerName)

    playerOneRef.on("value", function(snap) {

        if(snap.exists() === false) {

            playerOneRef.update({
                name: playerName,
                wins: playerOneWins,
                losses: playerOneLoss, 
                choice: ""
            })

        }

        else if(snap.child(2).exists() === true && snap.child(1).exists() === false) {

            playerOneRef.update({
                name: playerName

            })

        $("#player-one-name").text(snap.val().name); 
        waitingForPlayer(); 

        }




    });



}); 


function waitingForPlayer() {

    waitingDiv = $("<div>")
    waitingDiv.addClass("col-sm-12")
    waitingDiv.html("<p>" + "Waiting for another player.." + "</p>")
    $("#waiting-message").append(waitingDiv);

}

function renderChoices() {

}

