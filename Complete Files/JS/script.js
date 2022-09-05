//   --------Chapter 1-----------
/*
console.log("Hello");
*/

//   --------Chapter 2-----------
/*
let x = 4;
const y = 5;
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y) //multiplication
console.log(x / y); //division

let name = "Radee"; //string
let married = false; //boolean
let workDays = ["Sunday", "Tuesday", "Thursday"]; //array

console.log(name + " has " + x + " pets");
console.log(name + " has work on " + workDays[0]);
console.log("Last day of work is on " + workDays[2]);

let xGreaterThanY = x > y;
console.log(xGreaterThanY);

let stringCompare = "Hello" > "Konichiwa";
console.log(stringCompare);

console.log(4 == "4");
console.log(4 === "4");

if(married){
    console.log(name + " is married");
} else{
    console.log(name + " is not married");
}

x=y;

if(x>=y){
    console.log(x + " is greater than or equal to " + y);
} else{
    console.log(x + " is less than " + y);
}

if(x>y){
    console.log(x + " is greater than " + y);
} else if(x<y){
    console.log(x + " is less than " + y);
} else{
    console.log(x + " is equal to " + y);
}

if(x>=0 && x<2){
    console.log("very small");
} else if(x>=2 && x<4){
    console.log("small");
} else if(x>=4 && x<6){
    console.log("medium");
} else if(x>=6 && x<8){
    console.log("large");
} else{
    console.log("very large");
}

*/

/*
These Lines
Are
Comments
*/

//   --------Chapter 3-----------
/*
let fruits = ["Apples","Oranges","Grapes"];

for(let i=0;i<3;i++){
    console.log(fruits[i]);
}

for(let i in fruits){
    console.log(fruits[i]);
}

for(let i of fruits){
    console.log(i);
}
*/
/*
let i = 0;
while(i<3){
    console.log(fruits[i]);
    i++;
}

i=0;
do{
    console.log(fruits[i]);
    i++;
} while(i<=2);

let Found = false;
let searchFruit = "Grapes";
i=0;
while(!Found && i<3){
    if(fruits[i]===searchFruit){
        Found = true;
    } else{
        i++;
    }
}
console.log(Found);


let poppedFruit = fruits.pop();
fruits.push("Raspberry");
fruits.push("Blueberry");

arrayPrint(fruits);

fruits.push(fruits.shift());
fruits.unshift(poppedFruit);

arrayPrint(fruits);
*/

//   --------Chapter 4-----------
const mainElement = document.getElementById("main");
const listClass = document.getElementsByClassName("list");
const tableTag = document.getElementsByTagName("table");

document.getElementById("heading").innerHTML = "RAM";