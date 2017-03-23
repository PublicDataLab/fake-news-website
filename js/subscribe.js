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
        // Check if already subscribed
        firebase.database().ref('/email/').once('value')
            .then(function(snapshot) {
                var found = false;

                snapshot.forEach(function(element) {
                    if (element.val().value == document.getElementById('inputEmail').value) {
                        found = true;
                    }
                })

                if (!found) {
                    firebase.database().ref('email/').push()
                        .set({
                            timestamp: firebase.database.ServerValue.TIMESTAMP,
                            value: document.getElementById('inputEmail').value
                        })
                        .then(function() {
                            document.getElementById('message').innerHTML = "Thanks!";
                        })
                        .catch(function(e) {
                            console.log(e);
                        });
                } else {
                    document.getElementById('message').innerHTML = "You've already subscribed!";
                }
            });
    }
}
