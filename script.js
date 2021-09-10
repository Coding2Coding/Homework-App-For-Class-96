

function addUsername() {
    var username = document.getElementById("usernameInput").value;
    localStorage.setItem("username", username);
    window.location = "kwitterRoom.html"
}