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

var numOfPlayers = 0;
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



$("#name-submit-button").on("click", function() {

    var name = $("#name-input").val().trim(); 
     $("#name-input").val("");

    connectionsRef.on("value", function(snap) {
        
            if (snap.child(1).exists &&) {
                
                playersRef.set({
                    one: {
                        playerOneName: name,
                        wins: playerOneWins,
                        loss: playerOneLoss,
                    },

                    two: {
                        playerTwoName: name,
                        wins: playerTwoWins,
                        loss: playerTwoLoss,

                });

                waitingForPlayer();

            }

            if ((snap.child(1).exits) && (snap.child(2).exists)) {

                $("#waiting-message").empty();

            }

    });

});

function waitingForPlayer() {

    waitingDiv = $("<div>")
    waitingDiv.addClass("col-sm-12")
    waitingDiv.html("<p>" + "Waiting for another player.." + "</p>")
    $("#waiting-message").append(waitingDiv);

}











