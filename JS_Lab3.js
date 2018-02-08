/*
JSLab-3
Minami Munakata
*/

//Q1
console.log("Q1");
//a.
console.log("a.");
var arr = ['dog', 'cat', 'deer'];
var result = arr[0] + arr[2];
console.log(result);
//b.
console.log("b.");
console.log("cf) Q1_b.html");
console.log("var children = girls.concat(boys);");
//c.
console.log("c.");
var arr = [20, 30];
for (var i = arr.length; i < 5; i += 1) {
	arr[i] = Math.pow(i,2);
}
console.log(arr);
//d.
console.log("d.");
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;
for (var i = 1; i < 7; i += 1) {
	sum = sum + arr[i];
}
console.log(sum)
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var sum = 0;
for (var i = 0; i < 7; i += 2) {
	sum = sum*2 + arr[i];
}
console.log(sum);
console.log("Fixed like this =>");
console.log("for (var i = 0; i < 7; i += 2) {");
console.log("sum = sum*2 + arr[i];");
console.log("}");
//e.
console.log("e.");
var DL = 5;
var d = [25.0, 9.0, 10.0, 25.0, 15.0];
var mi = 0;
var m = d[mi];
for (var i = 1; i < DL; i++) {
	if (d[i] < m) {
		mi = i;
		m = d[mi];
		console.log(m);
	}
}
console.log("mi = ", mi, " m = ", m);

//Q2
console.log("Q2");

// I made an array in "spreadsheet"
//--------start---------
var spreadsheet = [];
var row = [];
var sumOfRow = 0
for (var i = 1; i < 6; i++) {
	for (var j = i; j < i + 5; j++) {
	row.push(j);
	}
	sumOfRow = row.reduce(function(a, b) {
    return a + b;
	});
	row.push(sumOfRow);
	spreadsheet.push(row);
	row = [];
	sumOfRow = 0;
}
for (var k = 0; k < spreadsheet.length; k++) {
	row.push(spreadsheet[k][5])
}

sumOfRow = row.reduce(function(a, b) {
    return a + b;
});
row.push(sumOfRow);
spreadsheet.push(row);
//--------end---------

console.log(spreadsheet)

function sumArray(array,size) {
	return array[size-1][size-1];
}

console.log("sumArray(spreadsheet,6); =>");
console.log(sumArray(spreadsheet,6)); // 6 x 6

