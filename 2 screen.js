
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDAArKVQZ9ekRjZqDz0LH9sfZLFIKfAB74",
      authDomain: "let-s-chat-910ee.firebaseapp.com",
      databaseURL: "https://let-s-chat-910ee-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-910ee",
      storageBucket: "let-s-chat-910ee.appspot.com",
      messagingSenderId: "1045721676953",
      appId: "1:1045721676953:web:25243f20cb0e06c8de4c08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_name",room_name);
window.location="let's chat.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
     //End code
     });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="let's chat.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
