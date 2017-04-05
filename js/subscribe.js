// Initialize Firebase
var config = {
    apiKey: "AIzaSyCTqcsAGTm3LqXcrK0nGZUp6Z8RkBx2Phc",
    authDomain: "fake-news-591bb.firebaseapp.com",
    databaseURL: "https://fake-news-591bb.firebaseio.com",
    storageBucket: "fake-news-591bb.appspot.com",
    messagingSenderId: "524372371793"
};

firebase.initializeApp(config);
var database = firebase.database();

function subscribe() {
    if ($('#contact_form').validator('validate').has('.has-error').length === 0) {
        // Checking for duplicates on server side.
        var email = document.getElementById('inputEmail').value;
        email = email.replace(/\./g, ',');
        firebase.database().ref('email/' + email)
            .set({
                email: email,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            })
            .then(function() {
                document.getElementById('message').innerHTML = "Thanks!";
            })
            .catch(function(e) {
                document.getElementById('message').innerHTML = "You're already subscribed!";
            });
    }
}
