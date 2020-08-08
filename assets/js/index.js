"use strict";

let colorRed = "Kirill";

console.log(colorRed);

//console.log (string)

let string = `my name is ${colorRed}`;

let chek = false;

let frN = prompt("число");
let a = 0;
while (+frN > a) {
  console.log("#");
  a++;
}

let frN2 = prompt("число");
let b = 0;
do {
  console.log("#");
  b++;
} while (+frN2 > b);

let frN3 = prompt("число");

for (let i = 0; i < +frN3; i++) {
  console.log("#");
}
