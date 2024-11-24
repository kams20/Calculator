
/* // var, let, const 
console.log(person); // hoisteng
var person = "person";


var person = "ikaw"; // redeclare
person = "ako"; // reassign

console.log(person); */

/* console.log(person); // not hoisted
let person = "angelito";

person = "ikaw"; // reassign
console.log(person);

// cannot redeclare
let person = "ikaw";
console.log(person); */

/* console.log(person); // not  be hoisted
const person = "ikaw";
console.log(person);

const person // cannot be declare the variable without the value */

/* let person = "angelito"; // global scope

{ // block scope
    console.log(person);
}

function scope() { // function scope

} */

/* function greet() {
    return `hello`;
}

export { greet }; */

/* function chechlengthPassword(pass) {
    let hasPassLength = pass.length > 8;

    if(hasPassLength) {
        alert(`true`);
    }else {
        alert(`false`);
    }
}

chechlengthPassword("angelitoo"); */

/* function username(name) {
    let lower = /[A-Z]/.test(name);
    let upper = /[a-z]/.test(name);
    
    if(lower) {
        console.log(name.toLowerCase());
    } else if(upper) {
        console.log(name.toUpperCase());
    } else {
        alert(`please try again`);
    }
}

username("angelito"); */

/* function validationEmail(email) {
    let hasEmail = email.includes("@gmail.com");

    if(!hasEmail) {
        alert(`please try again!`);
        return;
    }
    console.log(email);
}

validationEmail("angelito@gmail.com"); */

/* function number(num) {
    let slicethree = num.slice(0,3);
    return num.replace(slicethree, '*'.repeat(slicethree.length));
}

console.log(number("+639462662381")); */

/* function maskEmail(mail) {
    let start = mail.slice(0,3);
    let end = mail.slice(6,10);
    let mask = start.replace(start,end, '*'.repeat(start.length - end));
    return mask + end;
}

console.log(maskEmail("angelito")); */

/* function userName(name) {
    return name.split(" ").map(f => f.at(0).toUpperCase());
}

console.log(userName("angelito d tallod"))
 */

/* function fullname(name) {
    return name.split(" ").map(f => f.at(0).toUpperCase() + f.slice(1)).join(" ");
}

console.log(fullname("angelito d tallod")); */

/* let person;
person = "angelito";
person += " ikaw";

console.log(person);
 */


/* console.log(5 === "5"); // false
console.log(!null === !undefined); // true */

/* console.log(true && 1);
console.log(false && 1);
console.log(2 || 1);
console.log(0 || false); */


/* let str = "angelito";

if(typeof(str) === "string") {
    alert(`string`);
} else {
    alert(`not string`);
} */

/*     let number = "35.45";
    let parseIn = parseFloat(number);
    console.log(typeof parseIn ,parseIn); */
    // console.log();
    

    // unary operator
    // postfix count++ // declare fist before to increment
    // prefix ++count; // increment first 

/*     let count = 0;

    count++;
    console.log(count); */
/* 
    let count = 0;
    
    console.log(++count); */
    
/*     let count = false;
    console.log(++count); */
/*     const person = {name: "angelito"};
    const fruits = ["apples", "bananas", "oranges"];
    console.log(Array.isArray(fruits)); */

/*     const fruits = ["apples", "bananas", "oranges"];

console.log(fruits instanceof Array); */

/* let number = 2;
number &&= 1;
console.log(number); */

/* let undefi;

undefi ??= "ikaw";
console.log(undefi); */

/* function add(a,b)  { // parameters
    return a + b; // local variables
}

console.log(add(3,5)); // arguments are the values of the parameters when it is invokes */

// object literal 
/* const person = {
    name: "angelito",
    age: 21,
    gender: "male"
}
 */

/* const person = new Object();
person.name = "angelito";
person.age = 21;
console.log(person);
console.log("age" in person);
console.log(typeof person);
console.log(person instanceof Object); */

/* const person = {
    name: "angelito",
    age: 21,
    gender: "male"
}
let sex = "gender";
console.log(person.age, person["name"], person[sex]); */

/* const person = {
    firstName: prompt(`input your `),
};

person.firstName
console.log(person); */

/* const person = {
    firstName: "angelito",
    age: 21,
    gender: "male",
    
    addProperties(name,value) {
        if(typeof person === "object") {
            person[name] = value;
        } else {
            alert(`please try again`);
        }
    },

    deleteProperties(del) {
        if(del in person) {
            delete person[del];
        } else {
            alert(`not found ${del}`);
        }
    },

    updateProperties(del, update) {
        if(del in person) {
            person[del] = update;
        } else {
            alert(`Not foundt ${del}`);
        }
    },

    viewProperties() {
        for (let proper in person) {
            console.log(proper + ": " + person[proper]);
        }
    }
} */



/* person.deleteProperties("gender");
person.deleteProperties("age");
person.updateProperties("firstName", "anjie");
person.addProperties("nationality", "filipino");
console.log(person);
person.viewProperties(); */

/* const person = {
    name: "angelito",
    age: 21,
    gender: "male",
}

let objTostr = JSON.stringify(person);
let strToObj = JSON.parse(objTostr);
console.log(strToObj);
console.log(objTostr); */

// accessing by notation (., []);
/* document.write(person.age, person["gender"], person.name);

for (let proper in person) {
    console.log(proper, person[proper]);
} */

/* let key = Object.keys(person); */

/* for (let [per, value] of key) {
    console.log(per);
} */

/* 
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
} */

// for (let key of Object.keys(person)) {
//     console.log(key + " " + person[key]);
// }


/* for (let value of Object.values(person)) {
    console.log(value);
} */

/* const person = {
    name: "angelito",
    age: 21,
    gender: "male",
} */
/* 
let createDiv = document.createElement('div');

let container = ""; */
/* for (let properties in person) {
    container += `${properties}: ${person[properties]}<br>`;
} */

/*     for (let [key, value] of Object.entries(person)) {
        container += `${key}: ${value}<br>`;
    } */

    // let objTostr = JSON.stringify(person);
    // container += objTostr;
/*     let strtoObj = JSON.parse(person);
    container += strtoObj.name; */
/* 

document.body.appendChild(createDiv);
createDiv.innerHTML = container; */


/* function Person(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}
 */

/* const person1 = new Person("angelito", "tallod", 21, "male");
person1.addNationality = function(national) {
    return this.nationality = national;
}
console.log(person1.addNationality("pilipino"));
console.log(person1) */

// person1.view = function() {
//     this.firstName + " " + this.lastName + " " + this.age + " " + this.gender;
// }

/* const view = new Person();
console.log(view.viewPerson());
const person1 = new Person("angelito", "tallod", 21, "male");
 */

// console.log(person1.view());
/* let clicked = false; 

function clicks() {
    let button = document.querySelector('button'); 
    if(clicked) {
        button.textContent = "click";
        clicked = false;
    } else {
        button.textContent = "clicked";
        clicked = true;
    }
} */

/* function clicks() { 
    let button = document.querySelector('button'); 
    if (clicked) { 
        button.textContent = "Click"; clicked = false; 
    } else { 
        button.textContent = "Clicked"; clicked = true; 
    } 
} */

 /*    const users = {
    contact: null,
    email: null,
    };

let display = "";

function getContact(email) {
    if (typeof users === "object") {
        users.email = email;
        let startMask = email.slice(0, 13).replace(/[a-zA-Z]/g, "*");
        let endMask = email.slice(14,27);
        display = startMask + endMask;
        console.log(display);
    } else {
        alert(`please try again`);
    }
}

getContact("angelitotallod1234gmail.com");
console.log(users); */


    // console.log(users);
// let str = "09462662381";
/* console.log(str.at(-4)) */
/* console.log(str.charAt(0).toUpperCase() + str.slice(1)); */
// console.log(str.slice(5).trim().length)
/* console.log(str.padStart(5, "*")); */
// console.log(str.slice(4).padStart(11, "*"))

/* let str = "hello world";
console.log(str.split("|")) */
// console.log(str.split("@")[0])

// console.log(0.5 + 0.1);

/* let x = BigInt(999999999999999);
let add = BigInt(9.4);
let type = x + add;
console.log(type); */
/* let x = 123;
x.toString()
console.log(typeof x);
// console.log(); */

/* let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
console.log(typeof x, x); */

/* const fruits = ["apple", "banana", "grapes"];
// console.log(fruits.toString().lastIndexOf("grapes"));
console.log(fruits[fruits.length - 1]); */


// const fruits = ["apple", "banana", "grapes"];

/* for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit)); */
/* let fruitLength = fruits.length;
let count = 0
for (let i = 0; i < fruitLength; i++) {
    count++;
    console.log([count] ,fruits[i]);
} */
/* 
    const div = document.createElement('ul');

    let text = "<ul>";
    let header = `<h1>fruits</h1>`;
    for (let fruit of fruits) {
        text += `<li>${fruit}</li>`;
    }
    text += `</ul>`
    div.innerHTML = header + text; 
    document.body.appendChild(div);  */
/*     const inputFruits = document.createElement('input');
    const containerFruits = document.createElement('div');
    const btnFruits = document.createElement('button');
    btnFruits.textContent = "add";
    
    let confruits = [];
    
    // Lumikha ng isang <ol> element at idagdag ito sa containerFruits
    const ol = document.createElement("ol");
    containerFruits.appendChild(ol);
    
    btnFruits.addEventListener('click', () => {
        let getInputValue = inputFruits.value;
    
        if (getInputValue === "") {
            alert(`please type your letter of fruits`);
            return;
        }
    
        const li = document.createElement('li');
        li.textContent = getInputValue;
        confruits.push(getInputValue);
        ol.appendChild(li);
    
        inputFruits.value = "";
    
        // I-print ang confruits array sa console
        console.log(confruits);
    });
    
    document.body.appendChild(inputFruits);
    document.body.appendChild(btnFruits);
    document.body.appendChild(containerFruits);
     */
/*     let str = "hello world";

    console.time("myTimer"); // Simulan ang timer na may label na "myTimer"
    
    // Ilagay dito ang code na nais mong sukatin ang bilis ng pag-run
    for (let i = 0; i < 1000000; i++) {
        console.log("hello world");
    }
    
    console.timeEnd("myTimer"); // Itigil ang timer na may label na "myTimer"
     */
/* 
    const fruits1 = ["banana"];
    const fruit2 = new Array();
    
    console.time("myTimer1"); // Simulan ang timer na may label na "myTimer1"
    // Ilagay dito ang statement na nais mong sukatin ang bilis ng pag-run
    console.log(fruits1);
    console.timeEnd("myTimer1"); // Itigil ang timer na may label na "myTimer1"
    
    console.time("myTimer2"); // Simulan ang timer na may label na "myTimer2"
    // Ilagay dito ang statement na nais mong sukatin ang bilis ng pag-run
    console.log(fruit2[0] = "apple");
    console.timeEnd("myTimer2"); // Itigil ang timer na may label na "myTimer2"
    
 */

/*     const myObj = {
        name: "John",
        age: 30,
        cars: [
            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }
    
    for (let i in myObj.cars) {
        console.log(myObj.cars[i].name)
        for (let j in myObj.cars[i].models) {
            console.log(myObj.cars[j].models[j]);
        }
    } */

        // const fruits = ["Banana", "Orange", "Apple", "Mango"];
        // console.log(fruits.at(2));
/*         console.log(fruits.shift());
        console.log(fruits.pop());
        fruits[fruits.length] = "Kiwi";
        console.log(fruits.copyWithin(0,2))
        console.log(fruits.slice(1,2));
        console.log(fruits); */
/*         function change(fruit, change) {
            let index = fruits.indexOf(fruit);

            if(index > -1) {
                fruits.toSpliced(index,1, change);
                console.log(fruits);
                alert(`updated to changed`);
            } else {
                alert(`please try again`);
            }
        }

        change("Banana", "ikaw");
        console.log(fruits); */
        

/*         const inputText = document.createElement('input');
        const buttonEdit = document.createElement('button');
        
        inputText.value = "hello world";
        buttonEdit.textContent = "Edit";
        
        let clicked = false;
        buttonEdit.addEventListener('click', () => {
            if (clicked) {
                inputText.style.border = "1px solid black"; // Ibalik ang border
                clicked = false;
            } else {
                inputText.style.border = "none"; // Alisin ang border
                clicked = true;
            }
        
            if (inputText.value !== "hello world") {
                buttonEdit.style.display = "none"; // Itago ang button
                const create = document.createElement('span');
                create.textContent = inputText.value;
                inputText.style.display = "none"; // Itago ang input
                document.body.appendChild(create);
            }
        });
        
        document.body.appendChild(inputText);
        document.body.appendChild(buttonEdit); */
        
/*         const fruits = ["Apple", "Orange", "Apple", "Mango"];
        const position = fruits.indexOf("Apple") + 1;
        console.log(position); */
/*         const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple");
console.log(position); */

// const person = [
//     {name: "angelito", gender: "male"},
//     {name: "anjie", gender: "male"}
// ]

// let findPerson = person.find(n => n.name)
/* function getName(name) {
    let findName = person.find(n => n.name === name);

    if(findName.name) {
        alert(`found!`);
        console.log(findName);
    } else {
        alert(`not found!`);
    }
}

getName("anjie"); */
/* const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value,index, array) {
    console.log(value);
} */

/*     const numbers = [1,2,3,4,5];
    const some = numbers.some(num => num > 4)
    console.log(some); */

/*     const add = numbers.reduce((total, value) => total + value, 0);
    console.log(add); */

/*     numbers.forEach((num, index) => {
        console.log(index,num);
    }) */

/*     let doubled = numbers.map(num => {
        return num * 2;
    });

    console.log(doubled); */

/*     const high = numbers.filter(num => {
        return num > 3;
    })

    console.log(high); */

/*     const userCredentials = [];


    function Person(firstName, lastName,age,gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    function addPerson(user) {
        if(Array.isArray(userCredentials)) {
            userCredentials.push(user);
            alert(`successfully!`)
        } else {
            alert(`please try again`);
        }
    }

    function viewUserCredential() {
        for (let length of userCredentials) {
            console.log(length);
        }
    }

    function update(key,value) {
        for (let property of userCredentials) {
            if(key in property) {
                property[key] = value;
                alert('successfully update');
            } else {
                alert(`not found`);
            }
        }
    }

    function deletePerson(key) {
        let index = userCredentials.find(n => n.firstName === key);
        if(index !== -1) {
            userCredentials.splice(index, 1);
            alert(`successfully deleted`)   
        } else {
            alert(`not found`);
        }
    }

    const person1 = new Person("angelito", "tallod", 21, "male");

    addPerson(person1);
    // update("age", 22);
    deletePerson("angelito");
    viewUserCredential()
    // console.log(userCredentials);
 */

/*     const person = {
        name: "John",
        age: 30,
        city: "New York"
    };

    for (let key in person) {
        console.log(key + ": " + person[key]);
    }

    for (let [key, value] of Object.entries(person)) {
        console.log(key + ": " + value);
    }

    let objstr = JSON.stringify(person);
    console.log(objstr); */

/*     const fruits = ["Banana", "Orange", "Apple", "Mango"];

    function update(fruit) {
        let index = fruits.indexOf(fruit);
        if(fruits.length === 0) {
            alert(`empty`);
            return;
        }
        if(index > -1) {
            fruits.splice(index, 1);
            console.log(`deleted`);
        } else {
            console.log(`not found`);
        }
    }

    function addFruits(fruit) {
        if(Array.isArray(fruits)) {
            fruits.push(fruit);
            console.log(`added ${fruit} in fruits`);
        } else {
            console.log(`please try again`);
        }
    }

    function updateFruits(fruit, newFruit) {
        let index = fruits.indexOf(fruit);

        if(index > -1) {
            fruits.splice(index, 1, newFruit);
            console.log(`updated changed`)
        } else {
            console.log(`not found`);
        }
    }

    update("Banana");
    addFruits("apple");
    updateFruits("apple", "mango");
    console.log(fruits); */

/*     const person = [
        {age: 21},
        {age: 20},
        {age: 18},
        {age: 22},
        {age: 25},
    ] */



/*     let addAll = person.reduce((total,value) => total + value.age, 0);

    console.log(addAll); */



/*     const studentGrade = [
        { name: "Juan Dela Cruz", mathGrade: 85, scienceGrade: 90, englishGrade: 88, historyGrade: 92 },
        { name: "Maria Santos", mathGrade: 78, scienceGrade: 85, englishGrade: 80, historyGrade: 89 },
        { name: "Pedro Reyes", mathGrade: 90, scienceGrade: 95, englishGrade: 93, historyGrade: 91 },
        { name: "Liza Garcia", mathGrade: 76, scienceGrade: 83, englishGrade: 84, historyGrade: 87 },
        { name: "Mark Cruz", mathGrade: 92, scienceGrade: 88, englishGrade: 91, historyGrade: 89 },
        { name: "Anna Mendoza", mathGrade: 81, scienceGrade: 79, englishGrade: 85, historyGrade: 90 },
        { name: "Carlos Lopez", mathGrade: 89, scienceGrade: 91, englishGrade: 87, historyGrade: 94 },
        { name: "Isabel Perez", mathGrade: 84, scienceGrade: 79, englishGrade: 88, historyGrade: 86 },
        { name: "Tommy Lim", mathGrade: 77, scienceGrade: 85, englishGrade: 80, historyGrade: 81 },
        { name: "Sophia Tan", mathGrade: 91, scienceGrade: 90, englishGrade: 94, historyGrade: 93 }
    ];
    

    function viewStudent() {
        for (let property of studentGrade) {
            console.log(property);
        }
    }

    console.log(`\n list of student:`)
    viewStudent();

    function searchingStudent(studentName) {
        let index = studentGrade.find(f => f.name === studentName);

        if(index !== -1) {
            alert(`successfully found`);
            console.log(index); 
            let total = (index.englishGrade + index.historyGrade + index.mathGrade + index.scienceGrade) / 4;
            console.log(`total average: ${total}%`);
        } else {
            alert(`not found`);
        }
    }


    
    console.log(`\n searching list: `)
    searchingStudent('Maria Santos');
    searchingStudent('Juan Dela Cruz'); */

/*     switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          console.log(day)
          break;
        case 1:
          day = "Monday";
          console.log(day)
          break;
        case 2:
           day = "Tuesday";
           console.log(day)
          break;
        case 3:
          day = "Wednesday";
          console.log(day)
          break;
        case 4:
          day = "Thursday";
          console.log(day)
          break;
        case 5:
          day = "Friday";
          console.log(day)
          break;
        case 6:
          day = "Saturday";
          console.log(day)
        } */


/*         const fruits = new Set();

        function addFruits(fruit) {
            if(fruits instanceof Set) {
                fruits.add(fruit);
                alert(`successfully added ${fruit}`);
            } else {
                alert(`please try again`);
            }
        }

        function viewListFruits() {
            let count = 0;
            for (let length of fruits) {
                count++;
                console.log(count + ": ",length);
            }
        }

        function deleteFruits(fruit) {
            if(fruits.has(fruit)) {
                alert(`successfully deleted ${fruit}`)
                fruits.delete(fruit);
            } else {
                alert(`not found`);
            }
        }

        function updateFruits(fruit, newFruit) {
            if(fruits.has(fruit)) {
                fruits.delete(fruit);
                fruits.add(newFruit);
                alert(`successfully update`);
            } else {
                alert(`not found`);
            }
        }
        addFruits("banana");
        addFruits("apple");
        deleteFruits("banana");
        updateFruits("apple", "mango");
        console.log(`\n list of fruits`)
        viewListFruits(); */

/*         const fruits = new Map();
        fruits.set("apple", { quantity: 21, price: 32, origin: "ph" });
        console.log(fruits); */
        
    // addFruits

/*     function addFruits(fruit, price) {
        if(fruits instanceof Map) {
            fruits.set(fruit, price);
            alert(`successfully added`);
        } else {
            alert(`please try again`);
        }
    }

    function viewFruits() {
        fruits.forEach((value, key) => {
            console.log(key + ": " + value);
        })
    }

    addFruits("apple", 21);
    viewFruits(); */

/*     const fruits = new Map();

    fruits.set("apple", {price: 21, stock: 5});
    

    fruits.forEach(key => {
        console.log(key);
    }) */

/* console.log(typeof function (){}); */


/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

for (let {key, value} =  person) {
    console.log(key + ": " + value);
} */

/*     let enterAge = +prompt(`please enter you age`);

    try {
        if(enterAge === 0) {
            throw new Error ("please enter you age")
        } else if(enterAge === null) {
            throw new Error ("Canceled")
        } else if(isNaN(enterAge)) {
            throw new Error("please type a number of your age");
        } else {
            throw new Error(`your age is: ${enterAge}`);
        }
    }catch(err) {
        console.log(`message: ${err}`);
    } */

/*         let x = 5;

        console.log(x + y; */

/*         function myFunction(a, b) {
            return arguments.length;
        }
        console.log(myFunction(3,5)); */

/* function sum(callback, a,b){
    let result = a + b;
    callback(result);
}

function display(result) {
    console.log(result);
}

sum(display, 5, 5); */

/* let a = 1;
let b = 2;

[a,b] = [b, a];
console.log(a) */


/* function increase() {
    let count = 0;

    function countIncrease() {
        count++;
        console.log(`number increase: ${count}`);
    }

    return {countIncrease};
}

const counter = increase();




counter.countIncrease();
counter.countIncrease();
counter.countIncrease(); */

/* function fun1(callback) {
    setTimeout(() => {
        console.log(`task 1`);
        callback();
        }, 3000);
}


function fun2() {
    console.log(`task 2`);
    console.log(`task 3`);
    console.log(`task 4`);
}
fun1(fun2); */

/* const input = document.querySelectorAll('.screen')[0];

function appendToDisplayValue(inputs) {
    input.value += inputs;
}


function clearDisplay() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch(err) {
        input.value = err;
    }
} */