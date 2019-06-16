//https://firebase.google.com/docs/auth/web/manage-users?authuser=0
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("homepage").style.display = "block";
      document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      if(user != null){
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome user : "+ email;
      }
    } else {
      // No user is signed in.
      document.getElementById("homepage").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
});

/*
  _                _       
 | |    ___   __ _(_)_ __  
 | |   / _ \ / _` | | '_ \ 
 | |__| (_) | (_| | | | | |
 |_____\___/ \__, |_|_| |_|
             |___/         
*/

function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    window.alert("About to sign in with " + userEmail + " " + userPass);


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
    });
}

/*
  _                            _   
 | |    ___   __ _  ___  _   _| |_ 
 | |   / _ \ / _` |/ _ \| | | | __|
 | |__| (_) | (_| | (_) | |_| | |_ 
 |_____\___/ \__, |\___/ \__,_|\__|
             |___/                 
*/
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.alert("Logging out now.");
    }).catch(function(error) {
        // An error happened.
    });
}

