document.querySelector(".btn").addEventListener("click",function(){
  alert("text recieved");
  var audio = new Audio("kick-bass.mp3");
  audio.play();
});
var input = document.getElementById("inputtxt");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    alert("enter pressing workdedd");

    event.preventDefault();
    // Trigger the button element with a click
    document.getElementByClass(".Btn").click();
  }
});
