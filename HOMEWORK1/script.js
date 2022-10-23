//Practice_1

// Task 1/2 
alert("Denys");

//Task 3
let a, b;
a = 3;
b = 4;
alert(`${a}, ${b}`);
a = b;
alert(`${a}, ${b}`);

//Task 4
let taskArr = {
str: "Denys",
num: 298,
bool: true,
undfnd: "",
nll: null,
};

//Task5
let isAdult = confirm("Are you 18 y/o?");
console.log(isAdult);

//Task 6
let name, surname, group, birthYear;
name = "Denys";
surname = "Melnychuk";
group = "JS Team";
birthYear = 1989;
let mStatus = confirm("Are you married?");
typeof(name);
typeof(surname);
typeof(group);
typeof(birthYear);
typeof(mStatus);
console.log(birthYear, mStatus, name, surname, group)
let master, card = null;
console.log(typeof(master));
console.log(typeof(card));

//Task 7
let login = prompt('Please Enter Your Login');
let email = prompt('Please Enter Your Email');
let password = prompt('Please Enter Your Password');
alert(`Dear ${login}, your mail is ${email}, your password is ${password}`)

//Task 8


let secMinute = 60;
let secHour = secMinute * 60;
let secDay = secHour * 24;
let secMonth = secDay * 30;
alert(`Seconds in hour: ${secMinute}, 
Seconds in day: ${secDay}, 
Seconds in month: ${secMonth}.`)





