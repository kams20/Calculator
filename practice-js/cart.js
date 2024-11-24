/* import { add } from "./get.js";

console.log(add(5,6)); */

/* import greet from "./get.js";

greet(); */

/* let a = 10, b = 12, c = 12;

console.log(a + b + c); */
// var carName = "Volvo";
// var carName;
// console.log(carName);

/* let global = "global";

{
    let blockScope = "block";
}

function scope() {
    let functionScope = "scope";
}
 */

/* var x  = 10;

{
    var x = 2;
    console.log(x);
}

console.log(x); */

/* let x = 10;

{
    let x = 2;
    console.log(x);
}

console.log(x); */

// const x = 10;
// const x = 12; // cannnot be redeclared


/* const x = 10;
// x = 12; // cannot be reassign because this is the constant 

{
    const x = 12;
    console.log(x);
}
console.log(x); */

/* const person = {
    name: "angelito tallod",
}
 */
// const person // cannnot be redeclare again

// person = "angelito";
// console.log(person); // cannot be reassingn the variable because there are constant


// but you can change the element of the indexes of the array
/* const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "ako";
// or add
cars.push('ikaw');
cars.unshift("mama")
console.log(cars); */

/* const car = {type:"Fiat", model:"500", color:"white"};

car.color = "black";
console.log(car); */

// unary
// postfix and prefix

// postfix

// let count = 0

/* count++;
console.log(count);
console.log(count);
console.log(count);
 */
// prefix
/* ++count;
console.log(++count); */

/* let x = 10;

x += 10; // x = x + 10;
console.log(x); */

// console.log(!!0 === false); // false magiging true na kase kinomvert na
// console.log(0 !== false); // true

// there are two types of conversion

// the automatically conversion or impicit conversion
/* console.log("23" - 23);
// cooerion conversion
console.log("5" + 12);  */

// expicit munually converted

/* console.log(Number("23") + 23);
console.log(String(3) + 234);
console.log(!!false + true); */
// console.log());

/* const x = 10.34;
let convert = parseInt(x);
console.log( typeof convert ,convert);
let convertWith = parseFloat(x);
console.log( typeof convertWith,convertWith.toFixed(5)); */

/* console.log(true == 1); // true
console.log(true != 1); // false */

/* let getNumber = prompt(`type any number`);

if(getNumber < 10) {
    console.log(`less than 10`);
} else if(getNumber > 0) {
    console.log(`greater than 10`);
} else if(isNaN(getNumber)) {
    console.log(`its not a number`)
} else {
    console.log(`please try again`);
}
 */

/* let text1 = "A";
let text2 = "B";
let result = text1 < text2; */
/* let text1 = "20";
let text2 = "5";
let result = text1 < text2; */
// console.log(result);

/* console.log(10 && 12); // 12
console.log(12 && 0)// 0

console.log(12 || 0); // 12
console.log(12 || 2);  // 12

console.log(true || +true); // true
console.log(false || 2); */

/* let isStudent = true;

if(!isStudent) {
    console.log("yes")
} else {
    console.log("no")
} */

/*     let typeNumber = "10";

    if(typeof +typeNumber === "number") {
        console.log(`this is a number`)
    } else {
        console.log(`its not a number`);
    } */

/*     const fruits = ["apple", "mango"];

    if(fruits instanceof Array) {
        fruits.push("ako")
    } else {
        console.log(`please try again`);
    }
    console.log(fruits); */

/*     let x = 5;
let y = 2;
let z = x % y;
console.log(z); */

// postfix 
// let count = 0;
// count++;
// console.log(count++);

// prefix
// let count = 0;
// console.log(++count)
/* 
const numberCount = document.createElement(`h1`);
const addBtn = document.createElement('button');
const minusBtn = document.createElement('button');

let countText = 0;

numberCount.textContent = countText;
addBtn.textContent = "add";
minusBtn.textContent = "minus";


document.body.appendChild(numberCount);
document.body.appendChild(addBtn)
document.body.appendChild(minusBtn)

let add = document.querySelectorAll('button')[0];
let minus = document.querySelectorAll('button')[1];



add.addEventListener('click', () => {
    countText += 1;
    numberCount.textContent = countText;
})

minus.addEventListener('click', () => {

    if(countText === 0) {
        alert(`please add to minus the number`)
        return;
    }
    countText -= 1;
    numberCount.textContent = countText;
}) */

/* let lastName;

lastName ??= "guest";
console.log(lastName); */

// data types = there are two types of data primitive, non-primitive

// primitive data types - means if you change the values of the variable it create a new values and not be changed the original values
// string = "angelito" 'angelito' `angleit`
// number = 12 or 12.34
// boolean = true or false
// undefined = no value
// null = intentional to declare without the value
// symbol

// non - primitive data = mutable can be change the element or properties of the arrays or object and not create the another value of the variable memory

// object 
/* const person = {
    name: "angelito",
}

const x = person; // getting the referrence of the person in the momery of the person
x.name = "angelo";
console.log(x); */

// arrays 

/* const fruits = ["apple", "banana", "mango"];
fruits[0] = "ako"
console.log(fruits); */


/* function declaration(pram1, param2) {
    return pram1 + param2
} */

/*     let createBtn = document.createElement('button');


    createBtn.textContent = "click";

    document.body.appendChild(createBtn);

    let clicked = false;

  let btn = document.querySelectorAll('button')[0];


btn.addEventListener('click', () => {
    
    let btn = document.querySelectorAll('button')[0];

    if(clicked) {
        btn.textContent = "click";
        clicked = false;
    } else {
        btn.textContent = "clicked";
        clicked = true;
    }
}) */

/*     (function () {
        alert(`hello`);
    })(); */
/* 
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    
    let greeting = greet("Juan"); // Ang greeting ay magiging undefined
    console.log(greeting); // Output: undefined */
    
    // there are thre ways to define the objet
    // object literal using the {} curly braces
    // new object using new
    // object constructor using the function and this 

/*     const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    // accessing the objects
    // dot notation
    console.log(person.firstName);
    // bracket notaion
    console.log(person.lastName);
    // expression
    let personAge = "age";
    let personEye = "eyeColor";
    console.log(person[personAge]);
    console.log(person[personEye])
 */

/*     const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        // fullName : function() {
        //     return this.firstName + " " + this.lastName;
        // }
    }; */

    // console.log(person.fullName());
/*     const x = person;
    console.log(x);
    console.log(person); */

/*     for (let property in person) {
        console.log(property + " " + person[property]);
    }

    for (let [key ,value] of Object.entries(person)) {
        console.log(key + " " + value);
    } */

/*     let objTostr = JSON.stringify(person);
    console.log(objTostr); */


/*     function Person(first, last, age, eye,gender) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.gender = gender;
        this.fullname = function(gender) {
            return `${this.firstName} ${this.lastName} ${this.age} ${this.gender} ${this.eyeColor}`;
        }
    } */

/*     Person.prototype.fullname = function(gender) {
        return  this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor + " " + this.gender;
    } */
/*     const myFather = new Person("John", "Doe", 50, "blue");
    console.log(myFather.fullname(male)); */
    // myFather.changeName("angelo");
    // console.log(myFather);
    // const myMother = new Person("Sally", "Rally", 48, "green"); 
/*     console.log(myFather.fullname(male));
/*     myFather.nationality = "English";
    console.log(myFather); */

/* 
    function myFunction() { 
        alert("The input value has changed!"); 
    } */

/*     const div = document.querySelectorAll('div')[0];
    let isColored = false;
    div.addEventListener('click', () => {   

        const div = document.querySelectorAll('div')[0];
        if(isColored) {
            div.style.backgroundColor = "black";
            isColored = false;
        } else {
            div.style.backgroundColor = "pink";
            isColored = true;
        }
    }) */
/* 
            const inputField = document.querySelector("#myInput");
            const displayDiv = document.querySelector("#displayDiv");
            inputField.addEventListener('input', () => {
                displayDiv.textContent = inputField.value;
            }); */
        
/* 
        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('DOM fully loaded and parsed');
            console.log('Event type:', event.type); // Output: Event type: DOMContentLoaded
        }); */

        // let str = "hello";
        // console.log(str.length);


/*         function passwordLength(password) {
            let pas =  password.length > 8;
            if(pas) {
                console.log(`strong password`);
            } else {
                console.log(`weak password`);
            }
        }

        passwordLength("angelito123") */
/*         let str = "hello world";
        console.log(str.slice(0,3));
        console.log(str.substring(-5,5)) */
/*         let credentials = [];

        function userMask(anything) {
            if(anything.length === 15) {
                let start = anything.slice(0,2).replace(/[a-zA-Z]/g, "*");
                let middle = anything.slice(2,5);
                let end = anything.slice(6,8).replace(/[a-zA-Z]/g, "*");
                console.log(start + middle + end);
                alert(`successfully added`);
                const user = {
                    password: anything,
                }
                credentials.push(user);
            } else {
                alert(`please try again`);
            }
        }
        userMask("angelito tallod")
        console.log(credentials); */

/*         let fullname  = "angelito tallod";

        // console.log(fullname.split(" ").join(" "))

        let text = "Please locate where 'locate' occurs!";
        console.log(text.endsWith("!")) */


/*         let header = `programming languange`
        let languanges = ["HTML", "CSS", "JS", "PHP"];
        let container = `<h1>${header}</h1><ul>`;
        let count = 0;
        for (let elements of languanges) {
            count++;
            container += `<li>${count}. ${elements}</li>`;
        }

        container += `</ul>`;
        document.write(container);
 */
/*     let number = 10;
    console.log(isInteger(number)) */

    // const fruits = ["apple", "banana", "mango"];
/*     const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
// person.length;    // Will return 3
// person[0];  
console.log(person); */
/* const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
console.log(person);
console.log(Array.isArray(person));
console.log(person[0]); */

/* const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}
let container = `<ul>`
for (let i in myObj.cars) {
    container += `<li> ${myObj.cars[i].name} </li>`;
    for (let property of myObj.cars[i].models) {
        container += `<li>${myObj.cars[i].name} ${property}</li>`;
    }
}

container += `</ul>`;
document.write(container); */

/* const fruits = [];


function addfruits(fruit) {
    if(Array.isArray(fruits)) {
        fruits.push(fruit);
        console.log(` added this ${fruit}`);
    } else {
        console.log(`please try again`);
    }
}



function viewFruits() {
    let count = 0;
    for (let elements of fruits) {
        count++;
        console.log(`${count}. ${elements}`)
    }
}

function deleteFruits(fruit) {
    let index = fruits.indexOf(fruit);

    if(index > -1) {
        fruits.splice(index, 1);
        console.log(`successfully deleted.`);
    } else {
        console.log(`not found`);
    }
}

function updateFruits(oldfruit, newFruits) {
    let index = fruits.indexOf(oldfruit)

    if(index > -1) {
        fruits.splice(index, 1, newFruits);
        console.log(`successfully updated`);
    } else {
        console.log(`not found`);
    }
}



addfruits("apple");
updateFruits("apple", "mango");
// deleteFruits("apple");
// deleteFruits("apple");

console.log(`\n list of fruits:`);
viewFruits();
 */


/* const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}



let x = "<ul>";

for (let property in myObj.cars) {
    x += `<li>${myObj.cars[property].name}</li>`;
    for (let elemets in  myObj.cars[property].models) {
        x += ` ${myObj.cars[property].models[elemets]}`;
    }
}

x += `</ul>`
document.write(x);
 */

/* const fruits = ["apple", "mango", "banana"];

console.log(fruits.indexOf("banana"));
console.log(fruits.includes("banana"))
 */

/* const fruits = [
    {fruit: "banana", price: 20, stock: 12},
    {fruit: "apple", price: 20, stock: 12},
    {fruit: "mango", price: 20, stock: 12},
]


let findFruits = fruits.findLastIndex(f => f.fruit === "mango");
console.log(findFruits); */

/* const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted); */
/* const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort()) */

/* const fruits = [
    {fruit: "banana", price: 20, stock: 12},
    {fruit: "apple", price: 20, stock: 12},
    {fruit: "mango", price: 35, stock: 12},
]
 */
/* fruits.forEach((value, index, array) => {
    console.log(`${index}. ${value.fruit} ${value.price} ${value.stock}`);
})

const withfor = fruits.forEach((value, index, array) => {
    return `${index}. ${value.fruit} ${value.price} ${value.stock}`;
})
console.log(withfor); */

/* let doublePrice = fruits.map((value, index) => {
    return `${index}. ${value.fruit} ${value.price * 2} ${value.stock}`;
})

console.log(typeof doublePrice ,doublePrice); */

/* let findTheLowestStock = fruits.filter(value => {
    return `${value.price === 35}`;
})

console.log(findTheLowestStock); */

/* let totalFruitPrice = fruits.reduce((total, value) => total + value.price * 2, 0);

console.log(totalFruitPrice); */

/* let allPassed = fruits.some(value => value.price > 20);
console.log(allPassed); */

/* let create = document.createElement(`h1`);
setInterval(() => {
    const nowDate = new Date();
    let day = nowDate.getDay();
    let hours = nowDate.getHours();
    let minutes = nowDate.getMinutes();
    let seconds = nowDate.getSeconds();

    if(hours < 10) {
        hours += '0' + hours;
    } else {
        hours = hours
    }

    if(minutes < 10) {
        minutes += '0' + hours;
    } else {
        minutes = minutes;
    }

    if(seconds < 10) {
        seconds += '0' + seconds;
    } else {
        seconds = seconds;
    }

    switch(day) {
        case 0 : {
            day = 'sunday';
            break;
        }
        case 1 : {
            day = 'monday';
            break;
        }
        case 2 : {
            day = 'tuesday';
            break;
        }
        case 3 : {
            day = 'wenesday';
            break;
        }
        case 4 : {
            day = 'thursday';
            break;
        }
        case 5 : {
            day = 'friday';
            break;
        }
        case 6 : {
            day = 'saturday';
            break;
        }
        default: {
            alert(`try again`);
        }
    }
    const timeString = `${day} ${hours}:${minutes}:${seconds}`;
    create.textContent = timeString;

}, 1000);

document.body.appendChild(create); */

/* let getAge = prompt("type your age");


let get = (getAge === null || getAge === "") ? 'no value' :  getAge > 18 ? 'adult' : 'kids'
console.log(get); */

/* const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.name ?? (car.name = "ikaw"));
console.log(car); */

/* let createTimer = document.createElement('h1');
document.body.appendChild(createTimer);

let password = "angelito";
let attempt = 3;
let countdownSeconds = 30;
let timerInverval;

function update() {
    const timerElement = document.querySelectorAll('h1')[0];
    let seconds;
    if(countdownSeconds < 10) {
        seconds = '0' + countdownSeconds;
    } else {
        seconds = countdownSeconds
    }

    timerElement.textContent = seconds;

    if(countdownSeconds > 0) {
        countdownSeconds--;
    } else if(countdownSeconds > -1) {
        clearInterval(timerInverval);
        timerElement.textContent = "";
        location.reload();
    }
}

    function startTimer() {
        timerInverval = setInterval(update, 1000);
    }

document.body.appendChild(createTimer)

while(true) {
    
    let enterPassword = prompt(`enter your password`);
    if(enterPassword === "") {
        alert(`please type your passowrd`);
        break;
    }
    if(enterPassword === null) {
        alert(`cancel`);
        break;
    }

    if(enterPassword !== password) {
        attempt--;
        alert(`you have ${attempt} attempt!`)
        if(attempt === 0) {
            alert(`please  wait ${countdownSeconds} seconds and try again later.`);
            startTimer()
            break;
        }
    } else {
        alert(`welcome`);
        break;
    }
}
 */


/* const fruits = new Set();


function addFruits(fruit) {
    if(fruits.has(fruit)) {
        alert(`you already this fruits ${fruit}`);
        return;
    } 
    fruits.add(fruit);
}
// let myIterator = fruits.values();

function viewFruits() {
    fruits.forEach(value => {
        console.log(`${value}`);
    })
}


addFruits("apple");
addFruits("mango");
viewFruits() */


/* const fruits = new Map();

function addFruits(fruit, price) {
    if(fruits instanceof Map) {
        fruits.set(fruit, price);
    } else {
        alert(`please try again`);
    }
}

function getPrice(fruit) {
    return fruits.get(fruit);
}

addFruits("apple", 5000);
console.log(getPrice("apple"));
console.log(fruits); */
// console.log(Number(Math.PI));
/* console.log(Number(" "),
Number(""))
console.log(Number("John")); */

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
}; */


/* const {"firstName": myname, "lastName": mylastName, "age": myage} = person;
console.log(myname, mylastName, myage); */

// const numbers = [10, 20, 30, 40, 50, 60, 70];

// // Destructuring
// const [a,b, ...rest] = numbers;
// console.log(a, b, rest);

/* let myAte, myKuya, myTita;
myAte = myKuya = myTita = "tallod".at(0).toUpperCase() + "allod";
console.log(myAte); */

/* let firstName = "John";
let lastName = "Doe";

[firstName, lastName] = [lastName, firstName];
console.log(firstName); */

/* let str = "i am the god";

let has = str.replace(/God/i, "pogi");
console.log(has); */

/* let inputName = prompt(`type your name`);

try {
    if(inputName === "") {
        throw new Error("no input value");
    } else if(inputName === null) {
        throw new Error("cancel");
    } else {
        throw(`hello ${inputName}`);
    }
} catch(err) {
    console.log(`${err}`);
} finally {
    console.clear();
} */


/*     const person1 = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person2 = {
        firstName:"John",
        lastName: "Doe",
      }

    let call = person1.fullName.call(person2);
    console.log(call); */

/*     const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const member = {
        firstName:"Hege",
        lastName: "Nilsen",
      }
      
      let fullName = person.fullName.apply(member);
      console.log(fullName()); */

    //   const person = {
    //     fullName: function(city, country) {
    //       return this.firstName + " " + this.lastName + "," + city + "," + country;
    //     }
    //   }
      
    //   const person1 = {
    //     firstName:"John",
    //     lastName: "Doe"
    //   }
      
    //   let ex1 = person.fullName.apply(person1, ["Oslo", "Norway"]);

/*     const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      const ex2 = person.fullName.call(person1, "Oslo", "Norway");
      console.log(ex2) */

/*       let add = (a, b) => a + b;
      console.log(add(2,5)); */

/*       class Person {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
      }

      class Family {
        #container;
        constructor() {
            this.#container = [];
        }

        addMember(person) {
            if(person instanceof Person) {
                this.#container.push(person);
                console.log(`successfully added`);
            } else {
                console.log(`please try again`);
            }
        }

        viewFamily() {
            for (let elements of this.#container) {
                console.log(elements);
            }
        }
      }

      const family = new Family();
      const person1 = new Person("angelito", "tallod", 21);
      const person2 = new Person("angelito", "tallod", 21);
      const person3 = new Person("angelito", "tallod", 21);
      family.addMember(person1);
      family.addMember(person2);
      family.addMember(person3);
      family.viewFamily(); */

/*       class calculator {
        add(a, b) {
            return a + b;
        }

        add(a,b,c) {
            return a + b + c;
        }
      }

        const ex1 = new calculator();
        console.log(ex1.add(5,6)); */

/*         class Calculator {
            add(...arg) {
                if(arguments.length === 1) {
                    return arguments[0];
                } else if(arguments.length === 2) {
                    return arguments[0] + arguments[1];
                } else if(arguments.length === 3) {
                    let total = arg.reduce(total => total + arg, 0);
                    return total;
                } 
            }
        }

        const example = new Calculator();

        console.log(example.add(5,6,7)); */

/*         class Animal {
            speak() {
                console.log(`sound of animals`);
            }
        }

        class Dog extends Animal {
            speak() {
                console.log('the dog is barks');
            }
        }
        const animal = new Animal();
        animal.speak();

        const dog = new Dog();
        dog.speak(); */

/*         class Calculator {
            add(...numbers) {
                return numbers.reduce((sum, num) => sum + num, 0);
            }
        }

        const calculator1 = new Calculator();
        console.log(calculator1.add(5,7)); */

/*         class Car {
            constructor(brand) {
                this.brand = brand;
            }

            drive() {
                console.log(`driving the ${this.brand} car...`);
                this.#startEngine();
            };

            #startEngine() {
                console.log(`Engine started`)
            }
        }

        const car1 = new Car("bmw");
        car1.drive();
 */

/*         class Employee {
            constructor(name, position) {
                this.name = name;
                this.position = position;
                this.records = []; // Array to store daily records
            }
        
            logIn() {
                const now = new Date();
                const date = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
                const timeIn = now.toTimeString().split(' ')[0]; // Format: HH:MM:SS
        
                const existingRecord = this.records.find(record => record.date === date);
                if (existingRecord) {
                    console.log(`Log-in already recorded for ${this.name} on ${date}.`);
                } else {
                    this.records.push({ date, timeIn, timeOut: null, totalHours: null });
                    console.log(`${this.name} logged in at ${timeIn} on ${date}.`);
                }
            }
        
            logOut() {
                const now = new Date();
                const date = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
                const timeOut = now.toTimeString().split(' ')[0]; // Format: HH:MM:SS
        
                const record = this.records.find(record => record.date === date);
                if (!record) {
                    console.log(`No log-in record found for ${this.name} on ${date}.`);
                } else if (record.timeOut) {
                    console.log(`Log-out already recorded for ${this.name} on ${date}.`);
                } else {
                    record.timeOut = timeOut;
                    record.totalHours = this.calculateHours(record.timeIn, timeOut);
                    console.log(`${this.name} logged out at ${timeOut} on ${date}. Total hours: ${record.totalHours} hours.`);
                }
            }
        
            calculateHours(timeIn, timeOut) {
                const [inHours, inMinutes] = timeIn.split(':').map(Number);
                const [outHours, outMinutes] = timeOut.split(':').map(Number);
        
                const start = inHours * 60 + inMinutes;
                const end = outHours * 60 + outMinutes;
        
                const totalMinutes = end - start;
                return (totalMinutes / 60).toFixed(2); // Convert minutes to hours with 2 decimal places
            }
        
            viewRecords() {
                console.log(`Records for ${this.name}:`);
                this.records.forEach(record => {
                    console.log(
                        `Date: ${record.date}, Time In: ${record.timeIn}, Time Out: ${record.timeOut || "N/A"}, Total Hours: ${record.totalHours || "N/A"}`
                    );
                });
            }
        }
        
        // Create Employees
        const emp1 = new Employee("Juan Dela Cruz", "Software Engineer");
        const emp2 = new Employee("Maria Santos", "Project Manager");
        
        // Example Usage
        console.log("\n--- Log In Employees ---");
        emp1.logIn(); // Automatically logs the current date and time
        emp2.logIn();
        
        console.log("\n--- Simulate a Log Out After a Few Seconds ---");
        setTimeout(() => {
            emp1.logOut(); // Automatically logs the current date and time
            emp2.logOut();
        
            console.log("\n--- View Employee Records ---");
            emp1.viewRecords();
            emp2.viewRecords();
        }, 3000); // Wait for 5 seconds to simulate a working duration */
        

/*     class Employee {
        #records;
        constructor(name, position) {
            this.name = name;
            this.position = position;
            this.#records = [];
        }

        login() {
            const now = new Date();
            let date = now.toISOString().split('T')[0];
            let timeIn = now.toTimeString().split(' ')[0];

            const existingRecord = this.#records.find(record => record.date === date);

            if(existingRecord) {
                console.log(`Log-in already recorded for ${this.name} on ${date}.`);
            } else  {
                this.#records.push({date, timeIn, timeOut: null, totalHours: null});
                console.log(`${this.name} logged in at ${timeIn} on ${date}.`);
            }
        }

        logout() {
            const now = new Date();
            let date = now.toISOString().split('T')[0];
            let timeOut = now.toTimeString().split(' ')[0];

            const record = this.#records.find(record => record.date === date);

            if(!record) {
                console.log(`No log-in record found for ${this.name} on ${date}.`);
            } else if (record.timeOut) {
                console.log(`Log-out already recorded for ${this.name} on ${date}.`);
            } else {
                console.log(`${this.name} logged out at ${timeOut} on ${date}.`);
            }
        }
    }

    
    const emp1 = new Employee("Juan Dela Cruz", "Software Engineer");
    const emp2 = new Employee("Maria Santos", "Project Manager");
    emp1.login();
    emp1.logout(); */

/* import { add } from "./main.js";
console.log(add(5,3)); */
