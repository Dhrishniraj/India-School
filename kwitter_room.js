
const firebaseConfig = {
      apiKey: "AIzaSyBuUcYAYcycB3sX5Y48H00KXhy0atx3_C4",
      authDomain: "kwitter-60346.firebaseapp.com",
      databaseURL: "https://kwitter-60346-default-rtdb.firebaseio.com",
      projectId: "kwitter-60346",
      storageBucket: "kwitter-60346.appspot.com",
      messagingSenderId: "211461979537",
      appId: "1:211461979537:web:9b538d3d5fde58c98bee30"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
