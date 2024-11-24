

/* let person = "angelito";
let person; */

/* var person = "angelito";
var person;
console.log(person); */

// let x = 5 + 2 + 3;
// console.log(x);

// block scope

/* {
    var person = "angelito";
    console.log(person);
}

console.log(person);

{
    var person = "anjie";
    console.log(person);
} */

/*     console.log(person);
    var person = "angelitoo"; */

/* console.log(person)
var person = "angelito"; */
/* 
console.log(2 ** 2); */

/* let person = "angelito";
person += "tallod".padStart(2, "&");
console.log(person); */

/* console.log(5 == "5"); // true
console.log(5 == 3); // true
console.log(5 === "5") // false
console.log(5 != "5"); // false 
console.log(5 !== "5") // true

console.log(5 < 5)// false
console.log(4 < 2); // false
console.log(4 >= 4);  */


/* let typeNumber = prompt("type your number");
// let convertToNumber = Number(typeNumber);

if(typeNumber === null) {
    alert(`cancel`);
} else if(typeNumber === null) {
    alert(`no input value`)
} else if(typeNumber < 18) {
    alert(`minor`); 
} else {
    alert(`adult`)
} */

/*     console.log(!!(!1));
    console.log(true && !1); 
    console.log(true || false)
    console.log(1 || 2);

    console.log(false && 0)
     */

/*     console.log(typeof "");
    console.log(typeof NaN);
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof 355n);
    console.log(typeof !true);
    console.log(typeof function (){});
    console.log(typeof {});
    const fruits = ["apple", "banana"];
    console.log(Array.isArray(fruits));
    

    console.log(fruits instanceof Array);
    console.log(fruits instanceof Object);
    // console.log() */
/*     console.log(5 % 3); // 2
    console.log(5 % 2)// 1; */

    // increment and decrement 
    // postfix++ and ++prefix

/*     let count = 0;
    count++;
    console.log(count); */
/* 
    let count = 0;

    ++count;
    console.log(count); */
    

/*     let x = 5;
let z = x ** 2;
console.log(z); */
/* let btnIncrease = document.createElement('button');
let containerOutput = document.createElement('h1');
let number = 5;

containerOutput.textContent = number;
btnIncrease.textContent = "increase";



btnIncrease.addEventListener('click', () => {
    let increase = document.querySelectorAll('h1')[0];

    if(increase.textContent === number.toString()) {
        number = Math.pow(number, 5);
        increase.textContent = number;
        if(increase.textContent === "Infinity") {
            number = 0;
            increase.textContent = number;
            if(increase.textContent === "0") {    
                number++
                increase.textContent = number;
            }
        }
    } else {
        alert('pleae try again');
    }
})


document.body.appendChild(containerOutput);
document.body.appendChild(btnIncrease);
 */

/* let inputName = prompt(`input your name`);

if(inputName === "") {
    let noValue = "guest";
    alert(`you are ${noValue}`);
}else if(inputName === null) {
    alert(`cancel`); 
} else {
    alert(`please try again`);
} */

/* function add(a, b) {
    return a + b;
}

let total = add(4,6);
console.log(total); */

/* function declaration() {
    return name = "amgelito";
}

console.log(declaration()); */


/* 
let clicked = false;

function clicks() {
    const btn = document.querySelectorAll('button')[0];
    
    if(clicked) {
        btn.textContent = "click";
        clicked = false;
    } else {
        btn.textContent = "clicked";
        clicked = true;
    }
} */

/*     const person1 = {name: "angelito"};
    const person2 = new Object();
    person2.name = "angelito";

    function Person3(name) {
        this.name = name;
    }

    const instanceOf = new Person3("angelito");
    console.log(person1)
    console.log(person2)
    console.log(instanceOf) */

    // three times of accessing the object

    // dot, bracket, expression

/*     console.log(person1.name);
    console.log(person2["name"]);
    let myName = "name";

    console.log(instanceOf[myName]); */

/*     const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName() {
            return this.firstName + " " + this.lastName + " " + this.id;
        }
    }

    console.log(person.fullName()); */
/* 
    const person = {
        hobby: [
            {game: "ml", sports: "basketball"},
        ]
    }

    for (let property in person) {
        for (let elements of person[property]) {
            for (let key in elements) {
                console.log(key + " " + elements[key]);
            }
        }
    } */

/*     let x = 3.14;
    x = "true";
    console.log(x); */

/*     const person = {name: "angelito"};
    const anotherPerson = person;
    anotherPerson.name = "anjie";
    console.log("person",person);
    console.log("another person",anotherPerson); */

/*     const person = [];

    function addIndentiy(firstName) {
        if(Array.isArray(person)) {
            person.push({name: firstName, lastName: null});
        } else {
            alert(`please try again`);
        }
    }

    addIndentiy("angelito");
    let addLast = "lastName";
    person[addLast] = "tallod";
    console.log(person); */

/*     const person = [
        {name: "angelito"},
    ]

    for (let elements of person) {
        for (let key of Object.keys(elements)) {
            console.log(key, elements[key])
        }
    }
    console.log(person); */
/* 
    function updatePerson(name, current) {
        let findIndex = person.findIndex(n => n.name === name);

        if(findIndex > -1) {
            person.splice(findIndex, 1, current);
        } else {
            alert(`please try again`);
        }
    }
    updatePerson("name", "anjie"); */


/* 
     const person = [
        {name: "angelito"},
    ]
    
    function updatePerson(key, newValue) {
        for (let property of person) {
            if(key in property) {
                property[key] = newValue;
            }
        }
    }

    function addIndentity(key, value) {
        if(Array.isArray(person)) {
            person.forEach(item => {
                item[key] = value;
            })
        }
    }

    function deleteKey(key) {
        for (let property of person) {
            if(key in property) {
                delete property[key];
            }
        }
    }

    function viewPerson() {
        person.forEach(item => {
            console.log("person",item);
        })
    }

    updatePerson("name", "anjie");
    addIndentity("gender", "male");
    deleteKey("gender");
    viewPerson(); */


 /*    const myObj = {
        name:"John",
        age:30,
        myCars: {
            car1:"Ford",
            car2:"BMW",
            car3:"Fiat"
        }
    }

    for (let property in myObj) {

        if(property  === "myCars") {
            for (let car in myObj[property]) {
                console.log(`${car} ${myObj[property][car]}`);
            }
        }
    } */
/* 
    const person = {
        hobbies: [
            {sports: "baskeball", mobileGame: "ml"},
        ]
    }
    for (let property in person) {
        if(property === "hobbies") {
            for (let element of person[property]) {
                for (let [key, value] of Object.entries(element)) {
                    console.log(key + ": " + value);
                }
            }
        }
    } */

/*     const person = {
        name: "angelito tallod",
        gender: "male",
        age: 21
    } */

    // for (let [key, value] of Object.entries(person)) {
    //     console.log(key + ": " + value);
    // }

/*     for (let property in person) {
        console.log(property ,person[property]);
    } */

/*     let objToStr = JSON.stringify(person)
    document.write(objToStr); */

    // const fruits = ["apple", "banana", "mango", "mansanas"];

/*     for (let i = 0; i < fruits.length; i++) {
        console.log(i + 1,fruits[i]);
    } */
/*     let countOfFruits = 0;
    for (let elements of fruits) {
        countOfFruits++;
        console.log(`${countOfFruits}.`,elements);
    } */

/*         fruits.forEach((value, index, array) => {
            if(value === "banana") {
                console.log(`${index}. ${value.toUpperCase()}`);
            }
        }) */
/* 
            function Person(first, last, age, eye) {
                this.firstName = first;
                this.lastName = last;
                this.age = age;
                this.eyeColor = eye;
            }
            Person.prototype.addProperties = function(key, value) {
                return this[key] = value;
            }

            Person.prototype.deleteProperties = function(key) {
                if(key in this) {
                    delete this[key];
                } else {
                    alert(`not found`);
                }
            }

            Person.prototype.updateProperties = function(key, newValue) {
                if(key in this) {
                    this[key] = newValue;
                } else {
                    alert(`not found`);
                }
            }

            const myFather = new Person("John", "Doe", 50, "blue");
            myFather.addProperties("gender", "male");
            myFather.deleteProperties("gender");
            myFather.deleteProperties("lastName");
            myFather.updateProperties("firstName", "angelito");
            console.log(myFather); */

            
/* const input = document.createElement('input');
const container = document.createElement("div");

function getting() {
    let get = input.value;
    container.textContent = get;
}
document.body.appendChild(input)
document.body.appendChild(container)

input.addEventListener('input', getting); */


/* const person = [
    {name: "angelito", gender: "male"},
]


for (let elemets of person) {
    for (let property in elemets) {
        console.log(property + " " + elemets[property]);
    }
} */

/*     const personIdentity = [];

    function addIdentity(key, value) {
        if(Array.isArray(personIdentity)) {
            if(personIdentity.length === 0) {
                personIdentity.push({});
            }
            personIdentity[0][key] = value;
        } else {
            alert(`please try again`);
        }
    }

    function deleteidentity(key) {
        for (let elements of personIdentity) {
            if(key in elements) {
                delete elements[key];
            } else {
                alert(`not found`);
            }
        }
    }

    function updateIdentity(key, newValue) {
        for (let elements of personIdentity) {
            if(key in elements) {
                elements[key] = newValue;
            } else {
                alert("not found")
            }
        }
    }

    addIdentity("gender", "male");
    addIdentity("name", "angelito");
    deleteidentity("name");
    updateIdentity("gender", "female")
    console.log(personIdentity);
 */

/*     const company = {
        departments: {
            engineering: {
                head: "Alice",
                employees: 50
            },
            marketing: {
                head: "Bob",
                employees: 30
            }
        }
    };

    for (let i in company) {
        console.log(i);
        if(company[i] === "engineering") {
            for (let j in company[i]) {
                console.log(j);
            }
        }
    } */
    
/*     for (let property in company) {
        if(property === "name") {
            console.log(`${property}: ${company[property]}`);
        } else if (property === "location") {
            console.log(`${property}:`);
            for (let i in company[property]) {
                console.log(`${i}: ${company[property][i]}`)
            }
        } else if (property === "departments") {
            console.log(`${property}:`);
            for (let i in company[property]) {
                if(i === "engineering") {
                    console.log(`${i}:`);

                }
            }
        }
    } */

/*         const company = {
            name: "TechCorp",
            location: {
                city: "Mandaluyong",
                country: "Philippines"
            },
            departments: {
                engineering: {
                    head: "Alice",
                    employees: 50
                },
                marketing: {
                    head: "Bob",
                    employees: 30
                }
            }
        };
        

        for (let key in company) {
            console.log(`${key}:`)

            if(typeof company[key] === "object") {
                for (let nestedKey in company[key]) {
                    console.log(`${nestedKey}: ${company[key][nestedKey]}`);
                    if(typeof company[key][nestedKey] === "object") {
                        for (let innerKey in company[key][nestedKey]) {
                            console.log(`         ${innerKey}: ${company[key][nestedKey][innerKey]}`)
                        }
                    } 
                } 
            } else {
                console.log(`${company[key]}`)
            }
        } */
/* 
            const company = {
                name: "TechCorp",
                location: {
                    city: "Mandaluyong",
                    country: "Philippines"
                },
                departments: {
                    engineering: {
                        head: "Alice",
                        employees: 50
                    },
                    marketing: {
                        head: "Bob",
                        employees: 30
                    }
                }
            };
            
            for (let key in company) {
                console.log(`${key}:`);
            
                if (typeof company[key] === "object") {
                    for (let nestedKey in company[key]) {
                        console.log(`  ${nestedKey}:`);
                        if (typeof company[key][nestedKey] === "object") {
                            for (let innerKey in company[key][nestedKey]) {
                                console.log(`    ${innerKey}: ${company[key][nestedKey][innerKey]}`);
                            }
                        } else {
                            console.log(`    ${company[key][nestedKey]}`);
                        }
                    }
                } else {
                    console.log(`  ${company[key]}`);
                }
            }
            
 */
/*         for (let key in company) {
            console.log(`${key}`);

            if(typeof company[key] === "object") {
                for (let nestedKey in company[key]) {
                    console.log(`${nestedKey}`)

                    if(typeof company[key][nestedKey] === "object") {
                        for (let innerKey in company[key][nestedKey]) {
                            console.log(`${innerKey}: ${company[key][nestedKey][innerKey]}`);
                        }
                    } else {
                        console.log(`${company[key][nestedKey]}`)
                    }
                }
            } else {
                console.log(`${company[key]}`)
            }
        } */

/*         for (let key in company) {
            console.log(`${key}`);

            if(typeof company[key] === "object") {
                for (let nestedkey in company[key]) {
                    console.log(nestedkey);

                    if(typeof company[key][nestedkey] === "object") {
                        for (let innerKey in  company[key][nestedkey]) {
                            console.log(` ${innerKey}: ${company[key][nestedkey][innerKey]}`)
                        }
                    } else { console.log(` ${company[key][nestedkey]}`); // Output the value if it's not an object }
                    }
                }
            } else { console.log(` ${company[key]}`); // Output the value if it's not an object }
            }
        } */

   /*          const matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ];
    for (let elements of matrix) {
        if(elements.length === 3) {
            console.log(elements);
        }
    }             */

/*         const library = {
            name: "City Library",
            books: [
                { title: "Book One", author: "Author One" },
                { title: "Book Two", author: "Author Two" },
            ]
        }; */
/* 
        for (let key in library) {
            console.log(`${key}:`);
            if(Array.isArray(library[key])) {
                library.books.forEach(item => {
                    console.log(`title: ${item.title}, author: ${item.author}`);
                })
            } else {
                console.log(`   ${library[key]}`)
            }
        } */


/*             const university = {
                name: "Tech University",
                faculties: [
                    {
                        name: "Engineering",
                        departments: [
                            { name: "Computer Science", head: "Dr. Smith" },
                            { name: "Electrical Engineering", head: "Dr. Johnson" }
                        ]
                    },
                    {
                        name: "Arts",
                        departments: [
                            { name: "Literature", head: "Dr. Brown" },
                            { name: "History", head: "Dr. Davis" }
                        ]
                    }
                ]
            };
            
            for (let key in university) {
                if(key === "name") {
                    console.log(`${key}: ${university[key]}`);
                }
            }

            university.faculties.forEach(item => {
                    console.log("    " +item.name + ": ")
                    item.departments.forEach(department => {
                        console.log(department.name + " " + department.head)
                    })
            }) */

/*     let firstName = "angelito";
    let start = firstName.slice(0,2).replace(/[a-z]/g, "*");
    let middle = firstName.slice(2,6);
    let end = firstName.slice(6,8).replace(/[a-z]/g, "*");

    console.log(start + middle + end); */
    // console.log(str.at(-1));
    // console.log(str.slice(4,8))

/*     let lastName = "tallod";
    let combine = str.concat(" ", lastName)
    console.log(combine); */
    /* console.log(str.padStart(5,"*")) */

/*     const fruits = "apple, banana, mango";
    console.log(fruits.split(",")) */


    // let fullname = "angelito angelito tallod tallod";
    // console.log(fullname.indexOf("angelito"));
    // console.log(fullname.lastIndexOf("tallod"))
/*     let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
    let find = text.match("ain");
    console.log(find) */
// console.log(text);

/* 
function fruits(name,price,stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}

let inventoryFruits = [];
function inventory(fruit) {
    if(Array.isArray(inventoryFruits)) {
        inventoryFruits.push(fruit);
    } else {
        alert(`please try again`);
    }
}


fruits.prototype.updateFruit = function(key, value) {
    if(key in this) {
        this[key] = value;
    }
}

const fruit1 = new fruits("apple", 20, 34);
fruit1.updateFruit("name", "mango");
inventory(fruit1);
inventory(fruit1);
console.log(inventoryFruits); */

/* 
            function Person(first, last, age, eye) {
                this.firstName = first;
                this.lastName = last;
                this.age = age;
                this.eyeColor = eye;
            }
            Person.prototype.addProperties = function(key, value) {
                return this[key] = value;
            }

            Person.prototype.deleteProperties = function(key) {
                if(key in this) {
                    delete this[key];
                } else {
                    alert(`not found`);
                }
            }

            Person.prototype.updateProperties = function(key, newValue) {
                if(key in this) {
                    this[key] = newValue;
                } else {
                    alert(`not found`);
                }
            }

            const myFather = new Person("John", "Doe", 50, "blue");
            myFather.addProperties("gender", "male");
            myFather.deleteProperties("gender");
            myFather.deleteProperties("lastName");
            myFather.updateProperties("firstName", "angelito");
            console.log(myFather); */

/*             const cars = ["Saab", "Volvo", "BMW"];

            function updateCars(car, newCar) {
                let index = cars.indexOf(car);
                if(index > -1) {
                    cars.splice(index, 1, newCar);
                } else {
                    alert(`please try again`);
                }
            }

            updateCars("Saab", "mercedenz");
            console.log(cars.toString());
            
            const myArray = [];
            myArray[0] = Date.now();
            console.log(myArray); */

/*             const str = "angelito"
            let getLast = str.replace(str, "*".repeat());
            console.log(getLast); */


/*             const fruits = ["Banana", "Orange", "Apple", "Mango"];

            let container = "<ul>";
            fruits.forEach(item => {
                container += `<li>${item}</li>`;
            })
            container += `</ul>`;
            document.write(container); */

/*             const fruits = ["Banana", "Orange", "Apple"];
            fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
            console.log(fruits);     */

/*             const myObj = {
                name: "John",
                age: 30,
                cars: [
                    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
                    {name:"BMW", models:["320", "X3", "X5"]},
                    {name:"Fiat", models:["500", "Panda"]}
                ]
            }

            for (let key in myObj) {
                console.log(`${key}:`)
                if(typeof myObj[key] === "object") {
                    myObj.cars.forEach(item => {
                        console.log(`${item.name}:`);
                        item.models.forEach(model => {
                            console.log(`   ${model}`);
                        })
                    })
                } else {
                    console.log(`   ${myObj[key]}`);
                }

            } */


/*                 const myObj = {
                    name: "John",
                    age: 30,
                    cars: [
                        {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
                        {name: "BMW", models: ["320", "X3", "X5"]},
                        {name: "Fiat", models: ["500", "Panda"]}
                    ]
                };
                
                for (let key in myObj) {
                    console.log(`${key}:`);
                
                    if (typeof myObj[key] === "object") {
                        if (Array.isArray(myObj[key])) {
                            myObj[key].forEach(item => {
                                console.log(`  ${item.name}:`);
                                item.models.forEach(model => {
                                    console.log(`    ${model}`);
                                });
                            });
                        } else {
                            for (let nestedKey in myObj[key]) {
                                console.log(`  ${nestedKey}: ${myObj[key][nestedKey]}`);
                            }
                        }
                    } else {
                        console.log(`  ${myObj[key]}`);
                    }
                } */
                
/*                     const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.at(2).replace(/[A-z]/g, "*"));
        console.log(fruits); */

/*         const fruits = ["Banana", "Orange", "Apple", "Mango"];
        console.log(fruits.shift())
        console.log(fruits.unshift("banana"))
        console.log(fruits); */

/*         const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr); */

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1);
console.log(fruits); */

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Mango"];
// console.log(fruits.includes("Mango").valueOf(fruits));
// console.log(fruits);

/* const fruits = [
    {name: "apple", price: 320},
    {name: "mango", price: 320},
    {name: "mango", price: 350},
]

let index = fruits.findLast(n => n.name === "mango");
console.log(index); */

// const months = ["Jan", "Feb", "Mar", "Apr"];
/* let sort = months.sort();
console.log(sort);
console.log(months); */
/* let tosorted = months.toSorted();

console.log(tosorted);
console.log(months); */

/* const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log(sum); */
// let number = "";
/* numbers.forEach(num => {
    console.log(num > 5);
// }) */
// numbers.map(num => {
//     console.log(num * 2);
// })

/* 
numbers.filter(num => {
    console.log(num > 42);
}) */
/*     function myFunction(total, value, index, array) {
        return total + value;
    } */

/*         const numbers = [45, 4, 9, 16, 25];

        let check = numbers.some(value => {
            return value > 16
        })
        console.log(check); */

        // const d = new Date();
        // const d = new Date("October 13, 2014 11:13:00");
        // const d = new Date(2018, 15, 24, 10, 33, 30);
/*         const d = new Date();
        console.log(d.toDateString()); */
/*         const d = new Date();
        console.log(d.toUTCString());
        console.log(d.toDateString());
        console.log(d.toISOString()) */
        // const d = new Date("2021-03-25");
/*         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const d = new Date();
        let month = months[d.getMonth()];
        console.log(month); */

/*         const d = new Date();
console.log(d.getMilliseconds()); */

/* const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
console.log(days[d.getDay()]); */

        // console.log(d);

/*         let typeYourAge = prompt(`your age`);

        let get = (isNaN(typeYourAge)) ? "not a number" :
                    (typeYourAge === "") ? "no value" :
                    (typeYourAge === null) ? "cancel" : 
                    (typeYourAge < 18) ? "minor" : "adult";

            console.log(get); */

/*             let value = "";
            let sub = "guest";
            let knowIf = value ? value : sub;
            console.log(knowIf);

            let input = "he";
            let output = input;
            console.log(output); */

/*             let typeANumber = prompt(`type a number`);

            switch(true) {
                case (isNaN(typeANumber)) : {
                    let message = "not a number";
                    console.log(message);
                    break;
                }
                case (typeANumber === "") : {
                    let message = "no value";
                    console.log(message);
                    break;
                } 
                case (typeANumber === null) : {
                    let message = "cancel";
                    console.log(message);
                    break;
                }
                case (typeANumber > 18) : {
                    let message = "adult";
                    console.log(message);
                    break;
                }
                case (typeANumber < 18) : {
                    let message = "minor";
                    console.log(message);
                    break;
                }
                default: {
                    alert(`please try again`);
                }
            } */
/* 
                let dayNow = new Date();
                switch(dayNow.getDay()) {
                    case 0 : {
                        let day = "sunday";
                        alert(day);
                        break;
                    }
                    case 1 : {
                        let day = "monday";
                        alert(day);
                        break;
                    }
                    case 2 : {
                        let day = "tuesday";
                        alert(day);
                        break;
                    }
                    case 3 : {
                        let day = "wenesday";
                        alert(day);
                        break;
                    }
                    case 4 : {
                        let day = "thursday";
                        alert(day);
                        break;
                    }
                    case 5 : {
                        let day = "friday";
                        alert(day);
                        break;
                    }
                    case 6 : {
                        let day = "saturday";
                        alert(day);
                        break;
                    }
                    default: {
                        alert(`no day in the value`);
                    }
                } */

/*         let keyword = "pogi ako";
        let attempt = 3;
        alert(`you have ${attempt} attemp[s]`);
        while(true) {
            let inputKeyword = prompt(`type a keyword`);

            if(inputKeyword !== keyword) {
                attempt--;
                alert(`you have ${attempt} attemp[s]`);
                if(attempt === 0) {
                    alert(`please try again`);
                    break;
                }
            }else if (inputKeyword === "") {
                alert(`no input value`);
                break;
            } else if (inputKeyword === null) {
                alert(`cancel`);
                break;
            } else {
                alert(`welcome kupal`);
                break;
            }
        } */
/* 
        let n = 3;
        let string = "";

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                string += "*";
            }
            string += "\nw";
        }
        console.log(string); */

/*     const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let text = "";
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";

  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
    
  break list;
}
console.log(text); */
/* 
let fruits = new Set();

function addFruit(fruit) {
    if(fruits instanceof Set) {
        if(fruits.has(fruit)) {
            alert(`you already this ${fruit}`);
            return;
        }
        fruits.add(fruit);
        alert(`successfully added this ${fruit}!`);
    }
}

function viewFruits() {
    let number = 0;
    fruits.forEach((fruit) => {
        number++;
        console.log(`${number}. ${fruit}`);
    }) 
}

addFruit("apple");
addFruit("apple");
viewFruits(); */

/* const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log(text); */

// const fruits = new Map();
/* 
function deleteFruit(fruit) {
    if(fruits.has(fruit)) {
        fruits.delete(fruit);
    } else {
        alert(`please try again`);
    }
}
fruits.set("apple", 20);
deleteFruit("apple");
console.log(fruits); */

/* let typeName = prompt("type your namee");

try {
    if(typeName === "") {
        throw new Error("no value");
    } else if(typeName === null) {
        throw new Error("cancel");
    } else {
        console.log(`${typeName}`);
    }
} catch (err) {
    console.log(`${err}`);
} */

// console.log(Math.PI)
/* console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.trunc(4.9));
console.log(Math.sqrt(64));
console.log(Math.pow(8, 2)); */
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 11));

/* const inputValue = document.createElement('input');
const btnSubmit = document.createElement('button');

inputValue.placeholder = "guess the number 1 to 10";
btnSubmit.textContent = "guess"

let guest = Math.floor(Math.random() * 11);

btnSubmit.addEventListener('click', () => {
    let getValue = Number(inputValue.value);

    try {
        if(isNaN(getValue)) {
            throw new Error("not a number, please try again");
        } else if (getValue === "") {
            throw new Error("no value input");
        } else if (getValue > guest) {
            alert(`type lowest value`);
        } else if (getValue < guest) {
            alert(`type higher value`);
        } else if (getValue === guest) {
            if(getValue) {
                alert(`correct ${guest}`);
                window.location.reload();
                alert(`guess the number 1 to 10`);
                return
            }
        }
    }catch(err) {
        console.log(`message: ${err}`);
    }
    inputValue.value = "";
})

document.body.appendChild(inputValue);
document.body.appendChild(btnSubmit); */

/* const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
let fullname = person1.fullName.bind(person2);
console.log(fullname);
 */
/* const person = {
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
  
  let fullName = person.fullName.bind(member);
  console.log(fullName()); */

/*   class Stundent {
    constructor(name,gender,age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
  }


  class containerClass {
    #student;
    constructor() {
        this.#student = [];
    }

    addStudent(student) {
        if(student instanceof Stundent) {
            this.#student.push(student);
            alert(`added successfully`);
        } else {
            alert(`please try again`);
        }
    }

    addPropeties(key,value) {
        if(Array.isArray(this.#student)) {
            if(this.#student.length === 0) {
                this.#student.push({});
            }
            this.#student[0][key] = value;
            alert(`added successfully properties`);
        } else {
            alert(`please try again`);
        }
    }
    deleteStudent(stundetName) {
        let findName = this.#student.find(n => n.name === stundetName);

        if(findName) {
            this.#student.splice(findName, 1);
            alert(`successfully deleted`);
        } else {
            alert(`not found`);
        }
    }
    updateStudent(key,value) {
        for (let elemets of this.#student) {
            if(key in elemets) {
                elemets[key] = value;
                alert(`successfully updated`);
            } else {
                alert(`not found`);
            }
        }
    }
    filterStudent(gender) {
        let index = this.#student.filter(g => g.gender === gender);
        index.forEach(result => {
            console.log(`\n filter Gender:`)
            console.log(result);
        })
    }
    viewStudent() {
        if(this.#student.length === 0) {
            alert(`no student added!`);  
        } else {
            this.#student.forEach(student => {
                console.log(student);
            })
        }
    }
  }

  const container = new containerClass();
  
  const stundet1 = new Stundent("angelito tallod", "male", 21)
  const stundet2 = new Stundent("angelito tallod", "female", 21)

  container.addStudent(stundet1)
  container.addStudent(stundet2)

  container.filterStudent("female");
  container.filterStudent("male");
//   container.updateStudent("name", "angelito tallod jr");
//   container.updateStudent("age", "20");
//   container.addPropeties("nationality", "filipino");
//   container.deleteStudent("angelito tallod");
// container.addPropeties("nationality", "filipino");

console.log(`\n view Student:`)
  container.viewStudent(); */
//   console.log(container);

/* let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let convert = JSON.parse(text);
console.log(convert); */


/* let x = 15 * 5;
debugger;

console.log(x); */

/* let add, minus, multiply, divide;

add = 5 + 5;
minus 4 */

/* let x = 5 + 7; 
console.log(x.valueOf()); */

/* function add(a,b) {
    if(a === undefined || b === undefined) {
        return a = b = 0;
    }
    return a + b;
}

console.log(add(5));
console.log(add()) */

/* let x = 10;
switch(x) {
  case 10: alert("Hello");
} */

/* let x = 10;
switch(x) {
  case "10": alert("Hello");
} */
/* 
  let x =
"Hello \World!";
console.log(x) */


/* const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};


const person2 = {firstName: "Anne",lastName: "Smith"};
Object.emt

console.log(person1); */

/* const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
  ];

  console.log(Object.fromEntries(fruits)); */

 /*  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

  console.log(person["lang"]); */

/*   const grades = {
    English: "",
    math: "",
    filipino: "",
    set fullGrades(english, math, filino) {
        this.English = english, 
        this.math = math, 
        this.filipino = filino 
    }
  } */

/*     let add = function(a,b) {
        return a + b;
    }

    let total = add(3,54);
    console.log(total); */

/*     (function() {
        alert('hello')
    })(); */

/*     function add(a,b) {
        if(b === undefined) {
            b = 0;
        }
        return a + b;
    }

    console.log(add(4)) */

/*     function add(...arg) {
        let add = arg.reduce((total, value) => total + value, 0);
        return add
    }

    console.log(add(5,4,5,67,3)) */

/*     const person = {
        firstName:"John",
        lastName: "Doe",
        display: function () {
          return this.firstName + " " + this.lastName;
        }
      }

      let display = person.display.bind(person);
      console.log(setTimeout(display,3000)); */

/*       function add() {
        let counter = 0;
        function plus() {
            return counter += 1;
        }
        console.log(plus());   
        console.log(plus());   
        console.log(plus());   
        return counter;
      }

      console.log( add());
      console.log( add());
      console.log( add()); */

/*       function display(some) {
        alert(some);
      }

      function add(a, b, callback) {
        let total = a + b;
        callback(total);
      }

      let total = add(4,5, display); */

/*       async function  add(a, b) {
        let newPromise = new Promise(function(resolve, reject)) {


        }
      } */

/* function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(age <= 18) {
                reject("minor");
            } else {
                resolve("adult");
            }
        },3000);
    });
}


async function verify() {
    try {
        let response = "waiting...";
        console.log(response);
        let message = await checkAge(20);
        console.log(message);
    }catch (err) {
        console.log(err);
    }
}

verify(); */


// Function na nagbabalik ng Promise
/* function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("You are allowed to enter!");
        } else {
            reject("Access denied! You are too young.");
        }
    });
}

// Gumamit ng async/await para sa Promise
async function verifyAccess() {
    try {
        let message = await checkAge(20); // Palitan ang value ng edad dito
        console.log(message); // Output: "You are allowed to enter!"
    } catch (error) {
        console.error(error); // Output: "Access denied! You are too young."
    }
}

verifyAccess(); */


/* function checkAge(age) {
    return new Promise((resolve, reject) => {
        console.log("Promise is pending..."); // Initial state: pending

        setTimeout(() => { // Simulate async operation
            if (age >= 18) {
                console.log("Promise is fulfilled."); // Resolved state
                resolve("You are allowed to enter!");
            } else {
                console.log("Promise is rejected."); // Rejected state
                reject("Access denied! You are too young.");
            }
        }, 2000); // Delay ng 2 seconds
    });
}

// Async function para gamitin ang checkAge
async function verifyAccess() {
    try {
        let message = await checkAge(15); // Test with age (e.g., 15 or 20)
        console.log(message); // Output kapag fulfilled
    } catch (error) {
        console.error(error); // Output kapag rejected
    }
}

verifyAccess(); */

/* 
const fruits = [];

function addFruits(fruit) {
    return new Promise((resolve,reject) => {
            console.log(`waiting...`)
        setTimeout(() => {
            if(Array.isArray(fruits)) {
                fruits.push(fruit);
                resolve('successfully added!');
            } else {
                reject("please try again");
            }
        }, 3000);
    })
}

async function verify() {
    try {
        let result = await addFruits("apple");
        console.clear();
        console.log(result);
    } catch (error) {
        console.log(`message: ${error}`);
    }finally {
        console.log(`done waiting!`);
    }
}

verify();
console.log(fruits);
 */

/* function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
 */

/*     const  myTitle = document.getElementById("demo").firstChild.nodeValue;
    console.log(myTitle); */

    // console.log(window.location.href);
    // console.log(window.Location.hostname);
    

  /*   setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
} */

/*   function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  } */

/*     let password = prompt(`type your password`);

    if(password === "") {
        alert(`please try again`);
    }else if (password === null) {
        alert(`cancel`)
    } else {
        localStorage.setItem("name", password);
    }

    const input = document.createElement('input');
    const btn = document.createElement('button');

    btn.textContent = "check";

    document.body.appendChild(input);
    document.body.appendChild(btn);


    btn.addEventListener('click', () => {
        let get = input.value;

        if(get !== localStorage.getItem("name")) {
            alert(`wrong password`)
        } else {
            alert(`welcome`);
        }
        input.value = ""
    }) */
/*         async function fetchData() {
            const url = ''; // Example URL
            try {
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            }catch(err) {
                console.error(`ERROR ${err}`)
            }
        }
        
        fetchData(); */
/*         const frutis = {name: "apple", price: 200}
        let objtoStr = JSON.stringify(frutis);

        async function getTEXT(file) {
            let x = await fetch(file);
            let y = await x.json();
            console.log(y);
        }

        getTEXT(objtoStr); */