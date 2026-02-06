console.log("Hello world")

console.error("0")
console.warn("1");

//table
let students={ name:"Riddhima", age:19, course:"CSE"};
console.table(students);
console.table(["ABC","XYZ"]);
console.table([1,2,3],[4,5,6]);

console.group("CSE24");
console.log("name:Riddhima");
console.groupEnd();
console.count("click");
console.count("click");
console.count("click");
console.count("click");
console.count("click");
console.count("click");

//console.dir(document.body);

//Function 
function add(p,q){
    return p+q;
}
console.log(add(10,20));

//arrow function 
const multiply=(p,q)=>p*q;//Why over here constant is used? So that value of the arrow function stays the same and doesn't change
console.log("arrow function",multiply(5,5));

//Array 
let arr=[10,20,30,40];
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);

//object 
let student={
    name:"Riddhima",
    age:19,
    course:"B.Tech"
};

let today=new Date();

console.time("test");
for(let i=0;i<10000;i++){}
console.timeEnd("test");

//Math Functions
console.log(Math.sqrt(25));
console.log(Math.pow(2,3));
console.log(Math.random());

//String 
text="Hello World";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("llo"));
console.log(text.includes('a'));

//Type Conversion
let strnum="123";
let convert=Number(strnum);
console.log(convert);

//NaN
console.log(isNaN("abc"));
console.log(isNaN(123));

//dom manipulation 
setTimeout(()=>{
    console.log("Executed after 2 second");
},2000);

//try catch 
try{
    let result=x/0;
    console.log(result);
}catch(eror){
    console.log("Error");
}


