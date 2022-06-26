var canvas = document.getElementById("A");
var context = canvas.getContext("2d");
context.fillStyle = "black";
context.font = "bold 40px Arial";
context.fillText("C", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
canvas.myText = "C";
canvas.addEventListener('click', handleEvent, true);

var canvas = document.getElementById("B");
canvas.addEventListener('click', handleEvent, true);

function handleEvent(param) {
      var canvas = document.getElementById(param.target.id);
      if (canvas.myText) {
            /* clear the canvas */
            text = canvas.myText;
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.myText = null;
      } else {
            /* fill the canvas */
            var context = canvas.getContext("2d");
            context.fillStyle = "black";
            context.font = "bold 40px Arial";
            if (text) {
                  context.fillText(text, (canvas.width / 2) - 17, (canvas.height / 2) + 8);
                  canvas.myText = text;
                  text = null;
            }
      }
}

var text = null;

/* use 1 event handler
   use variable members
   */