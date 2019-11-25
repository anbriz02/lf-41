const readlineSync = require("readline-sync");


const mitoin = 63360;
const mitoft = 5280;
const mitoyd = 1760;

let num = 0
let value = ""

do  {
  origin = Number(readlineSync.question("\nEnter an origin unit: "));
  origin = Number(readlineSync.question("Enter an origin unit: "));
  dest = Number(readlineSync.question("Enter a destination unit: "));
  dest = Number(readlineSync.question("Enter a destination unit: "));
  value = Number(readlineSync.question("Enter a value: "));
} while (num < 0){
}
