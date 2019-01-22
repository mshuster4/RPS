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
  var players = database.ref("players");
  