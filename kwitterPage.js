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
  var userName = localStorage.getItem("username");
  var RoomNames = localStorage.getItem("roomName");
  function send() {
      var message = document.getElementById("typeMessage").value;
      firebase.database().ref(RoomNames).push({
          name: userName, 
          message: message, 
          likes: 0
      });
      document.getElementById("typeMessage").value="";
  }

  function getData() {
    firebase.database().ref("/"+RoomNames).on('value',
    function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    childData = childSnapshot.val();
    if(childKey != "purpose") {
        firebaseMessageId = childKey;
        messageData = childData;
        console.log(messageData);
        console.log(firebaseMessageId);
        var name = messageData["name"];
        var message = messageData["message"];
        var likes = message_data["likes"];
        var nameWithTag = "<h4>"+name+"</h4>";
        var messageWithTag = "<h4 class='messageH4'>"+message+"</h4>";
        var likeButton = "<button class='btn btn-info' id="+firebaseMessageId+" value="+likes+" onclick='updateLikes(this.id)'>";
        var spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>"+"Likes: "+likes+"</span>"+"</button>";
        var row = nameWithTag+messageWithTag+likeButton+spanWithTag;
        document.getElementById("output").innerHTML+=row;
    }
  //Start code
      
  //End code
  });});}
  getData();

function updateLikes(messageId) {
      var likes = document.getElementById(messageId).value;
      var updatedLikes = Number(likes)+1;
      firebase.database().ref(RoomNames).child(messageId).update({
          likes: updatedLikes
      });
}

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}