// Task 1

console.log("test")

function popsCount(currentObject) {
   let popNumber = (Object.keys(currentObject).length);

    return console.log(popNumber)
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

//Task 2

let popObject  = {
    car: true, 
    year: 2000,
    made: "foreign",
    seats: 298,
    state: "PA"

}

function showProps(obj) {
    let popKeys = Object.keys(obj);
    let popValues = Object.values(obj);
    //return console.log(popKeys);
    return console.log(popValues);
}

//Task 3

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        alert(`${this.name} ${this.surname}`)
    }
}
 class Student extends Person {
    constructor (name, surname, year){
    super (name, surname);
    this.year = year;
    }
    showFullName(middleName) {
        alert(`${this.name} ${this.surname} ${middleName}`)
    }

    showCourse(){
        let dt = new Date;
        alert((dt.getFullYear()) - (this.year));
    }

 }

let person = new Person ("Andy", "Jason");

let student = new Student ("Beta", "Gamma", "2020");

//Task 4
workersList = []
class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workersList.push(this);
    }
        #experience = +1.2

        get showExp() {
            return this.#experience;
        }
        set setExp(value) {
            return this.#experience = value;
        }

    showSalary(){
        let salary = this.dayRate * this.workingDays;
        return salary;
    }
    showSalaryWithExperience(){
        let salary = this.dayRate * this.workingDays * this.#experience;
        workersList.push(this)
        return salary;
    }

}


let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

// console.log(Object.values(worker1))

function sortBySalary() {
// for (let element of workersList) {
//     console.log(Object.values(element));
// }

let sortedArray = workersList.map(person =>{
    return {
        pName: person.fullName,
        pSalary: person.showSalaryWithExperience()
    }
})

sortedArray.sort((a, b) => {
    return b.pSalary - a.pSalary;
});

sortedArray.forEach((e) => {
    console.log(`${e.pName} ${e.pSalary}`);
});
}



//Task 5

class GeomretricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

};

class Triangle extends GeomretricFigure {

};

class Square extends GeomretricFigure {
};

class Circle extends GeomretricFigure {
};


// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
