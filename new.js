var button = document.querySelector('button');
button.onclick = function() {
    alert("Hello, world!")
}
function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
  }
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();