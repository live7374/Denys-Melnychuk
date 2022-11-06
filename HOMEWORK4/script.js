//Task 1

function calcRectangleArea(width, height) {

try {
    width = +prompt("Input width");
    height = +prompt("Input height");
    let area = 0;

    console.log("Checking numbers...");
    if (isNaN(width) || isNaN(height)) {
        throw "Width or height is not a valid number"}
        else if (width <= 0 || height <= 0) {
            throw "Width or height should be more than zero"}

console.log("Calculating area...");
area = width * height;
console.log(area);

} 
catch (err) {console.log(err)}
}


//Task 2
function checkAge() {

try {
let useAge = +prompt("Input your age");
if (useAge == "" || undefined) {
    throw new Error(alert("The field is empty"))}
    else if (isNaN(useAge)) {
        throw new Error(alert("Age must be a number"))}
        else if (useAge < 14) {
            throw new Error(alert("You are too young"))}
            else { console.log("Access to filmography granted")}
        }

catch (Error) {console.log (Error.stack)}

}

//Task 3

class MonthException {
    constructor(message){
    this.name = "MonthException";
    this.message = message;

    }
}

function showMonthName(month){

    let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

try {
    if (month == "" || isNaN(month) || month < 1 || month > 12) {
        throw new MonthException("Incorrect month number")
    }
    month = monthNames[month - 1];
    return month;
}

catch (Error) { 
    return Error.name + ": " + Error.message; }
}

//Task 4

function showUser(id) {

    if (id < 0 ) {
        throw new Error(`ID must not be negative: ${id}`);
    }
    return {id: id};
}


function showUsers(ids) {
    let idsNew = [];

for (let i = 0; i < ids.length; i++) {
    iter = ids[i];
    //console.log(showUser(iter));
    try {
    idsNew.push(showUser(iter));
    } catch (Error) { console.log(`ID must not be negative: ${iter}`) }}

return console.log(idsNew);
}


