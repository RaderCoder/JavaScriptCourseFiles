console.log("Hello");
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