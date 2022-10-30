// Practice_3

// Task 1

//with for
let newArray = [2, 3, 4, 5];
let newI = newArray[0]
for (let i = 0; i < newArray.length; newI = newI + newArray[i])
{
    console.log(newI);
    i++;
};

// with while
// let newArray = [2, 3, 4, 5];
// let i = 0;
// let newI = 0;
// while ( i < newArray.length ){
//     newI = newI + newArray[i];
//     console.log(newI);
//     i++;
// }


// Task 2

for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {                    //can add (i > 0) condition not to count 0 as even 
        console.log(`${i} even`)}
    else
        {
            console.log(`${i} odd`);
        }};

// Task 3

function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500));
    }
   return arr
};

// Task 4

function raiseToDegree(a, b) {
    a = +prompt(`input a`);
    b = +prompt(`input b`);
    return a ** b;
};

//Task 5
//1st try
function findMin() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++)
    {arr.push(arguments[i]);};
    let min = +(Math.min(...arr));
    return min;
}

// 2nd try))

function findMin(){
 return Math.min(...arguments);
}

//Task 6
function findUnique(arr){
    let unArr = new Set(arr);
    console.log(unArr.size);
    console.log(arr.length);
    return unArr.size == arr.length;
}


// Task 7

function lastElement(arr, a){
    let newArr 
    if ( a === undefined){
    newArr = arr.pop();
    }
    else if ( a >= arr.length){
        newArr = arr
    }
    else{
    newArr = arr.slice(arr.length - a);
    }
    return newArr;
}


// Task 8
function makeCapital(str) {
    word = str.split(" ");
    console.log(word);
        for (i in word){
            word[i] = word[i][0].toUpperCase() + word[i].substr(1);
        }
    capString = word.join(" ");

    return capString;
}