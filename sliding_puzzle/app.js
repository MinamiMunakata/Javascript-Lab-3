var puzArr = [[1,2,3],[4,5,6],[7,8,0]];
var doneArr = [1,2,3,4,5,6,7,8,0];
var zero = {};
var count = 0

window.onload = function(){
    startGame();
}

function startGame() {
	randomize(puzArr);
	upDateDisplay();
	startTime();
	count = 0;
	printMove();
	restart();
}

function randomize(array) {
	for (var row = array.length-1; row > 0; row--) {
		for (var column = array[row].length-1; column > 0; column--) {
			var r1 = Math.floor(Math.random() * (column + 1));
			var r2 = Math.floor(Math.random() * (column + 1));
		    var tmp = array[row][column];
		    array[row][column] = array[r1][r2];
		    array[r1][r2] = tmp;
		}
	}
}

function restart() {
	$('button').click(function() {
		location.reload();
	});
}

function isDone() {
	var oneArray = [];
	for (var row = 0; row < puzArr.length; row++) {
		oneArray = oneArray.concat(puzArr[row])			
	}
	return (oneArray.toString() == doneArr.toString());
}

function closeGame() {
	$("li").removeAttr("onClick onmouseover onmouseout");
	$('#great').html("Great!!");
}

function upDateDisplay() {
    var $tiles = $("#tiles")
    var inputToUl = ""
    var tileOrder = getTileOrderAsArray()
    for (var tileNumber = 0; tileNumber < tileOrder.length; tileNumber++) {
        if (tileOrder[tileNumber] == 0) {
            inputToUl +=' <li class="tile" id="hidden">0</li>'
        } else {
            inputToUl +=' <li class="tile" id="tile' + tileOrder[tileNumber] + '" onClick="move(' + tileOrder[tileNumber] + ')" onmouseover="mouseOver(' + tileOrder[tileNumber] + ')" onmouseout="moveOut(' + tileOrder[tileNumber] + ')">' + tileOrder[tileNumber] + '</li>'
        }
    }
    $tiles.html(inputToUl)
}

//---- get time ----
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function startTime() {
    var date = new Date();
    var x = $('#start_time');
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    x.html("Start Time: " + h + ":" + m + ":" + s);
}
function endTime() {
    var date = new Date();
    var x = $('#end_time');
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    x.html("End Time: " + h + ":" + m + ":" + s);
}
//------------------

function getTileOrderAsArray() {
	var tileOrder = [];

	for (var row = 0; row < puzArr.length ; row++) {
	for (var column = 0; column < puzArr[row].length ; column++) {
		tileOrder.push(puzArr[row][column]);
	}
	}
	return tileOrder;
}

function printMove() {
	if (isDone()) {
		$('#move_count').html('Moves: ' + count + ' --- Done!!!');  	
    } else {
    	$('#move_count').html('Moves: ' + count);
    }
}

function move(number){
	var obj = getPoint(number)

	if (isMovable(obj.row,obj.column)) {
		puzArr[zero.row][zero.column] = puzArr[obj.row][obj.column];
		puzArr[obj.row][obj.column] = 0;
		count++;
		printMove();
		upDateDisplay();
		if (isDone()) {
			closeGame();
			endTime();
		}
	}
};

function isMovable(row,column) {
	return (isMovableUp(row,column) || isMovableRight(row,column) || isMovableDown(row,column) || isMovableLeft(row,column))
}

function isMovableUp(row,column){
	if (row != 0 && !puzArr[row -1][column]) {
		zero.row = row-1;
		zero.column = column;
		return true;
	}
}

function isMovableRight(row,column){
	if (column < 2 && !puzArr[row][column +1]) {
		zero.row = row;
		zero.column = column+1;
		return true;
	}
}

function isMovableDown(row,column){
	if (row < 2 && !puzArr[row +1][column]) {
		zero.row = row+1;
		zero.column = column;		
		return true;
	}
}

function isMovableLeft(row,column){
	if (column != 0 && !puzArr[row][column -1]) {
		zero.row = row;
		zero.column = column-1;		
		return true;
	}	
}

function getPoint(number){
	var row;
	var column;
	var tileOrder = getTileOrderAsArray();
	var indexOfTileOder = tileOrder.indexOf(number);

	if (indexOfTileOder < 3) {
		row = 0;
	} else if (indexOfTileOder >=3 && indexOfTileOder < 6) {
		row = 1;
	} else {
		row = 2;
	}
	if (indexOfTileOder == 0 || indexOfTileOder%3 == 0 ) {
		column = 0;
	} else if ((indexOfTileOder+2)%3 == 0) {
		column = 1;
	} else {
		column = 2;
	}
	return {"row": row, "column": column};
}

function mouseOver(number){
	var obj = getPoint(number)
	var idName = "tile" + number;

	if (isMovable(obj.row,obj.column)) {
		document.getElementById(idName).style.backgroundColor = "lightgreen";
	} else {
		document.getElementById(idName).style.backgroundColor = "red";
	}
};
function moveOut(number) {
		var idName = "tile" + number;
	    document.getElementById(idName).style.backgroundColor = "";
};
