//unit test
//coding is if, loop and function

function drawPiece(color, pieceName, text) {
    var fillStyleColor;
    var chessPiece = document.getElementById(`${color}-${pieceName}`);
    var ctx = chessPiece.getContext('2d');

    if (color === 'black') {
        fillStyleColor = 'grey';
    } else if (color === 'white') {
        fillStyleColor = 'yellow';
    }

    ctx.fillStyle = fillStyleColor;
    ctx.font = "bold 40px Arial";
    ctx.fillText(text, (chessPiece.width / 2) - 17, (chessPiece.height / 2) + 8);
}

function drawPeices(color) {
    drawPiece(color, 'rook', 'R');
    drawPiece(color, 'knight', 'N');
    drawPiece(color, 'bishop', 'B');
    drawPiece(color, 'queen', 'Q');
    drawPiece(color, 'king', 'K');
    drawPiece(color, 'bishop2', 'B');
    drawPiece(color, 'knight2', 'N');
    drawPiece(color, 'rook2', 'R');
    drawPiece(color, 'pawn', 'P');
    drawPiece(color, 'pawn2', 'P');
    drawPiece(color, 'pawn3', 'P');
    drawPiece(color, 'pawn4', 'P');
    drawPiece(color, 'pawn5', 'P');
    drawPiece(color, 'pawn6', 'P');
    drawPiece(color, 'pawn7', 'P');
    drawPiece(color, 'pawn8', 'P');
}

drawPeices('black');
drawPeices('white');