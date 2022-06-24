var canvas = document.getElementById("A");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("C", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.myText = "C";
canvas.addEventListener('click', handleEvent, true);

function handleEvent(param) {
      var canvas = document.getElementById(param.target.id);

      if (!canvas.myText) {
            return;
      }

      text = canvas.myText;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var text = null;

var canvas = document.getElementById('B');
canvas.addEventListener('click', handleMove, true);


function handleMove(params) {
      if (text === null) {
            return;
      }
      var canvas = document.getElementById(params.target.id);
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.font = 'bold 40px Arial';
      ctx.fillText(text, (canvas.width / 2) - 17, (canvas.height / 2) + 8);
}

