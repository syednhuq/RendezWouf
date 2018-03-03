  // Initialize Firebase
  var config = {
    
    apiKey: "AIzaSyAjK-6UM8BKfrOPFCdxJhFF944-hy-a-mI",
    authDomain: "log-in-5d20f.firebaseapp.com",
    databaseURL: "https://log-in-5d20f.firebaseio.com",
    projectId: "log-in-5d20f",
    storageBucket: "log-in-5d20f.appspot.com",
    messagingSenderId: "711388906132"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  var Email ;
  var password ;

$("#submit").on("click", function(){
event.preventDefault()
 Email = $("#exampleInputEmail1").val().trim();
 password = $("#exampleInputPassword1").val().trim();

  database.ref().push({

    Email: Email,
    Password: password

  });
firebase.auth().createUserWithEmailAndPassword(Email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode) {
      console.log(errorCode);
    }
  else{

  }

  });
  });