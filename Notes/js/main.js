function removestyle() {
  console.log("running");
  var display = document.getElementsByClassName('MathJax_Display');
  console.log(display.length)
  for(var i = 0; i < display.length; i++){
    console.log(display[i]);
    display[i].setAttribute("style", "text-align: justify;");
  }
}


function main() {
  setTimeout(removestyle, 20);

}
