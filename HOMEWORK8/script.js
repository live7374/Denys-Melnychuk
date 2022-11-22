console.log("test  ")


// Task 1

function upperCase(text){
    let re = /^[A-Z]/

            if (re.test(text))
            {
                console.log("Starts with Uppercase")
            }
            else
            {
                console.log("Does not starts Uppercase")
            }
}


// Task 2

function checkEmail(str) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str))
    {return (true)}
    console.log("Invalid email")
return false
}


//Task 3
function findDB(){
    const myRe = /d(b+)(d)/i;
    const myArray = myRe.exec("cdbBdbsbz");
    console.log(myArray);
}

// Task 4
function replace(){
    const re = /(\w+)\s(\w+)/;
    const str = "Java Script";
    const newstr = str.replace(re, "$2, $1");
    console.log(newstr)
}



// Task 5

function checkCard(num){
    let re = /^\d{4}-\d{4}-\d{4}-\d{4}/
    if (re.test(num))
            {
                console.log("Valid")
            }
            else
            {
                console.log("Not Valid")
            }


}


//Task 6

function checkMail(str) {

    if (/^[A-Za-z0-9]+([-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z0-9-]+)*$/.test(str)) 
    {
        console.log(true)
    } else {
        console.log('Invalid email')
    } 
}


// Task 7

function checkLogin(data){
let re = /^(?=.{2,10}$)(?![0-9])[a-z0-9.]+$/;
let reNumber = /[0-9\.]+/g;
let resultNumber = data.match(reNumber);
// console.log(resultNumber)
console.log(re.test(data))
console.log(`${resultNumber}`)

}