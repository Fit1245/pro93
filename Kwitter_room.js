const firebaseConfig = {
    apiKey: "AIzaSyDSnWmAkid56nC5nl8v3IcaM9NeYqNIPC0",
    authDomain: "kwitter-project-8d57e.firebaseapp.com",
    databaseURL: "https://kwitter-project-8d57e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-8d57e",
    storageBucket: "kwitter-project-8d57e.appspot.com",
    messagingSenderId: "562366174442",
    appId: "1:562366174442:web:074443fdf21688034c7393"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
