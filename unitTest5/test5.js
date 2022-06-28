var canvas = document.getElementById("A");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("A", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.addEventListener('click', handleEvent, true);

function handleEvent(param) {
      var canvas = document.getElementById(param.target.id);
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
}