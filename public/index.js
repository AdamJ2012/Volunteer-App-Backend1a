//window.alert("OKAY");
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick(){
    window.alert("Button pressed! Adding \"Text\" and \"Some value\" to the database.");
    var firebaseRef = firebase.database().ref();

    firebaseRef.child("Text").set("Some value");
}