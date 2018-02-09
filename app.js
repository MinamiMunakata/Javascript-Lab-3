var puzArr = [[1,2,3],[4,5,6],[7,8,0]];


var obj = {

};
var zero = {

};

var count = 0;

//isMovable(obj.row, obj.column)

function move(number){
	if (number <= 3) {
		obj.row = 0
	} else if (number >= 4 && number <= 6) {
		obj.row = 1
	} else {
		obj.row = 2
	}
	if ((number+2)%3 == 0 ) {
		obj.column = 0
	} else if ((number+1)%3 == 0) {
		obj.column = 1
	} else {
		obj.column = 2
	}
	console.log(obj)
	if (isMovable(obj.row,obj.column)) {
		puzArr[zero.row][zero.column] = puzArr[obj.row][obj.column];
		puzArr[obj.row][obj.column] = 0;
		count += 1
		document.getElementById("move_count").innerHTML = "Moves: " + count; // -- Done!!
		console.log(puzArr);
		console.log(count)

	}
};


 // numberの座標を取る method
// function getRowColumn(number) {
// 	if (number <= 3) {
// 		obj.row = 0
// 	} else if (number >= 4 && number <= 6) {
// 		obj.row = 1
// 	} else {
// 		obj.row = 2
// 	}
// 	if ((number+2)%3 == 0 ) {
// 		obj.column = 0
// 	} else if ((number+1)%3 == 0) {
// 		obj.column = 1
// 	} else {
// 		obj.column = 2
// 	}
// 	console.log(obj)
// }

 //　とった座標をisMovableで取得する
 // isMovable trueのとき入れ替える swap
 // how to animate?


function isMovable(row,column) {
	console.log((isMovableUp(row,column) || isMovableRight(row,column) || isMovableDown(row,column) || isMovableLeft(row,column)))
	return (isMovableUp(row,column) || isMovableRight(row,column) || isMovableDown(row,column) || isMovableLeft(row,column))
	console.log(puzArr[row-1][column]) //up 
	console.log(puzArr[row][column+1]) // right
	console.log(puzArr[row+1][column]) // down
	console.log(puzArr[row][column-1]) // left
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

function startTime() {
    var date = new Date();
    var x = document.getElementById("start_time");
    var h = addZero(date.getHours());
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
    x.innerHTML = "Start Time: " + h + ":" + m + ":" + s;
}


// how to get it only for the first time 

function mouseOver(number){
	if (number <= 3) {
		obj.row = 0
	} else if (number >= 4 && number <= 6) {
		obj.row = 1
	} else {
		obj.row = 2
	}
	if ((number+2)%3 == 0 ) {
		obj.column = 0
	} else if ((number+1)%3 == 0) {
		obj.column = 1
	} else {
		obj.column = 2
	}

	var idName = "tile" + number;
	if (isMovable(obj.row,obj.column)) {
		document.getElementById(idName).style.backgroundColor = "lightgreen";

	} else {
		document.getElementById(idName).style.backgroundColor = "red";
	}
};

// bg color
function moveOut(number) {
	var idName = "tile" + number;
    document.getElementById(idName).style.backgroundColor = "";
}