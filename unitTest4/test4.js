var canvas = document.getElementById("A");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("C", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.myText = 'C';
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById("B");
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById("C");
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById("D");
canvas.addEventListener('click', handleEvent, true);

function handleEvent(param) {
      var canvas = document.getElementById(param.target.id);

      if (canvas.myText) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            globalVar = canvas.myText;
            canvas.myText = null;
      } else {
            var context = canvas.getContext("2d");
            context.fillStyle = "black";
            context.font = "bold 40px Arial";
            if (globalVar) {
                  context.fillText(globalVar, (canvas.width / 2) - 17, (canvas.height / 2) + 8);
                  canvas.myText = globalVar;
                  globalVar = null;
            }
      }
}

var globalVar = null;