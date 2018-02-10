//bug あり　入れ替わりがおかしい　６　３　２　５　！３でバグ！
// function () {

// }

// らんだむ
// すたーと
// カウント
// リスタートでリセットされるもの

// クリア判定
// Click event "" 書き換える

var puzArr = [[1,2,3],[4,5,6],[7,8,0]];
var zero = {};
var count = 0;

function upDateDisplay() {
	var $tiles = $("#tiles")
	var inputToUl = ""
	var tileOrder =	getTileOrderAsArray()

	for (var tileNumber = 0; tileNumber < tileOrder.length; tileNumber++) {
		if (tileOrder[tileNumber] == 0) {
			inputToUl +=' <li class="tile" id="hidden">0</li>'
		} else {
			inputToUl +=' <li class="tile" id="tile' + tileOrder[tileNumber] + '" onClick="move(' + tileOrder[tileNumber] + ')" onmouseover="mouseOver(' + tileOrder[tileNumber] + ')" onmouseout="moveOut(' + tileOrder[tileNumber] + ')">' + tileOrder[tileNumber] + '</li>'
		}
	}
	$tiles.html(inputToUl)
}

function startTime() {
    var date = new Date();
    var x = document.getElementById("start_time");
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    x.innerHTML = "Start Time: " + h + ":" + m + ":" + s;
}

function getTileOrderAsArray() {
	var tileOrder = [];

	for (var row = 0; row < puzArr.length ; row++) {
	for (var column = 0; column < puzArr[row].length ; column++) {
		tileOrder.push(puzArr[row][column]);
	}
	}
	return tileOrder;
}

function getPoint(number){
	var row;
	var column;

	if (number <= 3) {
		row = 0
	} else if (number >= 4 && number <= 6) {
		row = 1
	} else {
		row = 2
	}
	if ((number+2)%3 == 0 ) {
		column = 0
	} else if ((number+1)%3 == 0) {
		column = 1
	} else {
		column = 2
	}
	return {"row": row, "column": column}
}

function move(number){
	var obj = getPoint(number)

	if (isMovable(obj.row,obj.column)) {
		puzArr[zero.row][zero.column] = puzArr[obj.row][obj.column];
		puzArr[obj.row][obj.column] = 0;
		count += 1
		document.getElementById("move_count").innerHTML = "Moves: " + count; // -- Done!!
		upDateDisplay(); //表示画面更新する
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

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
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
}