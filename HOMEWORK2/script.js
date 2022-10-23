//Practice_2

// Task 1
let x = 1;
let y = 2;

let res1 = "" + x + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = String(x >= 0) + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x <= y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseFloat(x > y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task 2

let x = prompt("Enter a number: ");
let res = (x > 0 && x % 2 ==0 ) ? "Yes": "No";
console.log(`a) ${res}`); 
res = (x % 7 == 0) ? "Yes": "No";
console.log(`b) ${res}`); 

//Task 3

let newArray = [];
newArray[0] = 220;
newArray[1] = "Volt";
newArray[2] = true;
newArray[3] = null;
alert(`Array length: ${newArray.length}`);
newArray[5] = prompt("Please Enter 5th Element.");
alert(`5th Element: ${newArray[5]}`);
newArray.shift();
alert(newArray);

//Task 4

let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join("*"); 

//Task 5

let isAdult = prompt("How Old Are You?");
alert((isAdult >= 18) ? "You Are Adult" : "You're Not Adult Yet");

//Task 6

let a = prompt("Input Triangle A side");
(a > 0 ) ? a = parseInt(a) : alert("Incorrect Data");
let b = prompt("Input Triangle B side");
(b > 0 )? b = parseInt(b) : alert("Incorrect Data");
let c = prompt("Input Triangle C side");
(c > 0 )? c = parseInt(c) : alert("Incorrect Data");
p = (a + b + c)/2;
triSquare = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(`Trinagle S: ${triSquare.toFixed(3)}`);

if 
(a ** 2 === b ** 2 + c ** 2 || 
 b ** 2 === c ** 2 + a ** 2 || 
 c ** 2 === a ** 2 + b ** 2) 
{console.log(`Triangle Is Right`)}
else if 
( triSquare > 0)
{console.log(`Triangle Is Not Right`)}
else 
{console.log(`Incorrect Data`)};

//Task 7
//1st variation
let today = new Date();
let time = today.getHours();
(time < 5 && time == 23)? console.log(`Good Night`): "";
(time < 11 && time >= 5)? console.log(`Good Morning`): "";
(time < 17 && time >= 11)? console.log(`Good Day`): "";
(time < 23 && time >= 17)? console.log(`Good Evening`): "";

//2nd variation
let today = new Date();
let time = today.getHours();
switch(time) {
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:   
        console.log(`Good Evening`);
        break;
    case 23:
    case 0:  
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`Good Night`);
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log(`Good Morning`);
        break;
    default:
        console.log(`Good Day`);
        break;
}