// var config = {
//     apiKey: "AIzaSyAjK-6UM8BKfrOPFCdxJhFF944-hy-a-mI",
//     authDomain: "log-in-5d20f.firebaseapp.com",
//     databaseURL: "https://log-in-5d20f.firebaseio.com",
//     projectId: "log-in-5d20f",
//     storageBucket: "log-in-5d20f.appspot.com",
//     messagingSenderId: "711388906132"
//   };

//   firebase.initializeApp(config);



// var database = firebase.database();

$('#login-submit').on('click', function(test) {
    var Password = $('#exampleInputPassword1').val();
    var Email = $('#exampleInputEmail1').val();
    
  firebase.auth().signInWithEmailAndPassword(formEmail, formPassword)
  .then(function(confirmationResult) {
       

        console.log("We In????")
        console.log(confirmationResult)

        $.ajax({
            url: 'api/users',
            method: "POST",
            data: JSON.stringify(confirmationResult)
        })
        .done(function(){
            console.log("great success!!!")


            
         window.location.replace("google.com")
        })
   
    })




    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode === 'auth/wrong-password') {
    alert('Password or Email Wrong');
  } else if(errorMessage) {
    alert(errorMessage);
  }

  
});
    
})