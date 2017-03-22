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
    firebase.database().ref('email/' + $('#inputEmail').val()).set(firebase.database.ServerValue.TIMESTAMP)
      .then(function() {
        console.log("Thanks!");
      })
      .catch(function(e) {
        console.log(e);
      });
}
