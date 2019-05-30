//window.alert("OKAY");
const mainText = document.getElementById("mainText");
const submitBtn = document.getElementById("submitBtn");
const fireHeading = document.getElementById("fireHeading");


const firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
    fireHeading.innerText = datasnapshot.val();
});



function submitClick(){
    window.alert("Button pressed! Adding \"Text\" and \"Some value\" to the database.");
    const firebaseRef = firebase.database().ref();

    const messageText = mainText.nodeValue;

    firebaseRef.push().set(messageText);
}