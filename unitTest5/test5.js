var canvasA = document.getElementById("A");
var context = canvasA.getContext("2d");
context.fillStyle = 'black';
context.font = "bold 40px Arial";
context.fillText("C", (canvasA.width / 2) - 17, (canvasA.height / 2) + 8);
canvasA.myText = 'C';
canvasA.addEventListener('click', handleEvent, true);

var canvasB = document.getElementById("B");
var context = canvasB.getContext("2d");
context.fillStyle = "blue";
context.font = "bold 40px Arial";
context.fillText("D", (canvasB.width / 2) - 17, (canvasB.height / 2) + 8);
canvasB.myText = 'D';
canvasB.addEventListener('click', handleEvent, true);

var canvas = document.getElementById('B');
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById('C');
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById('D');
canvas.addEventListener('click', handleEvent, true);

function handleEvent(param) {
      var canvas = document.getElementById(param.target.id);
      if (canvas.myText) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            globalText = canvas.myText;
            globalColor = ctx.fillStyle;
            ctx.fillStyle = null;
            canvas.myText = null;
      } else {
            var context = canvas.getContext('2d');
            if (globalText) {
                  context.fillStyle = globalColor;
                  context.font = 'bold 40px Arial';
                  context.fillText(globalText, (canvas.width / 2) - 17, (canvas.height / 2) + 8);
                  canvas.myText = globalText;
                  globalText = null;
                  globalColor = null;
            }
      }

}

var globalText = null;
var globalColor = null;