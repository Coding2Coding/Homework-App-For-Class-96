var zz = localStorage.getItem("username");
document.getElementById("welcomeUsername").innerHTML=zz;

var firebaseConfig = {
  apiKey: "AIzaSyDY4bRBIlPJZOzvoMVwx9JbxRhKSIAQwcg",
  authDomain: "homework-app-for-class-93---97.firebaseapp.com",
  databaseURL: "https://homework-app-for-class-93---97-default-rtdb.firebaseio.com",
  projectId: "homework-app-for-class-93---97",
  storageBucket: "homework-app-for-class-93---97.appspot.com",
  messagingSenderId: "283346615738",
  appId: "1:283346615738:web:c15482b146bce933283183",
  measurementId: "G-CJPPFMXKYY"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

  

function getData() {
  firebase.database().ref("/").on('value',
  function(snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {
  childKey = childSnapshot.key;
  Room_names = childKey;
//Start code
    var row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)>"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row;
    
//End code
});});}
getData();

function addRoom() {
  var roomName = document.getElementById("roomNameInput").value;
  firebase.database().ref("/").child(roomName).update({purpose: "Adding The Room Name"});
  localStorage.setItem("roomName", roomName);
  window.location = "kwitterPage.html";
}


function redirectToRoomName(roomName) {
      localStorage.setItem("roomName", roomName);
      window.location = "kwitterPage.html";
    }

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}