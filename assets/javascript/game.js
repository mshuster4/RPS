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
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected")
var playersRef = database.ref("/players");

var playerOneExists = false;
var playerTwoExists = false; 

connectedRef.on("value", function(snap) {

if (snap.val()) {

        var con = connectionsRef.push(true);
        con.onDisconnect().remove(); 

    }

}); 

connectionsRef.on("value", function(snap) {

    numberOfPlayers = snap.numChildren(); 
    
});



function renderPlayers(number) {

        connectionsRef.on("value", function(snap) {

            numberOfPlayers = snap.numChildren(); 
    
        });

        
        if (numberOfPlayers == 1) {
            
            var playerOneName = $("#name-input").val();
            console.log(playerOneName);
            $("#player-one-name").text(playerOneName)
            $("#name-input").val("");


        }

        else if (numberOfPlayers == 2) {

            var playerTwoName = $("#name-input").val();
            console.log(playerTwoName);
            $("#player-two-name").text(playerTwoName)
            $("#name-input").val(""); 


        }
    
};

$(document).on("click", "#name-submit-button", function() {
    
    renderPlayers(numberOfPlayers);

});
