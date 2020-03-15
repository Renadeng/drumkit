// Press key, play sound
document.addEventListener("keydown", function(e) {
  buttonEffect(e.key);
  switch (e.key) {
    case "a":
      playSound("crash");
      break;
    case "s":
      playSound("tom-1");
      break;
    case "d":
      playSound("kick-bass");
      break;
    case "f":
      playSound("tom-2");
      break;
    case "g":
      playSound("snare");
      break;
    case "h":
      playSound("tom-3");
      break;
    case "j":
      playSound("tom-4");
      break;
    default:
      text = "No sound!";
  }
});


// Play sound
function playSound(key) {
  let sound = new Audio("sounds/" + key + ".mp3");
  sound.play();
}

// Button effect
function buttonEffect(key){
  document.getElementById(key).classList.add("keyPressed");
  setTimeout(function(){
  document.getElementById(key).classList.remove("keyPressed")
},500);
}
