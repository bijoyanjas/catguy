var canvas = document.getElementById("A");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("A", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.addEventListener('click', handleClick, true);

/*var canvas = document.getElementById("B");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("B", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.addEventListener('click', handleClick, true);*/

function handleClick(param) {
      if (param.target) {
            alert(param.target.id);
      }
}