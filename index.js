console.log("Hello world")


console.error("0")
console.warn("1");

let students={ name:"Riddhima", age:19, course:"CSE"};
console.table(students);
console.table(["ABC","XYZ"]);
console.table([1,2,3],[4,5,6]);
console.time("test");

for(let i=0;i<10000;i++)
{
}
console.timeEnd("test");
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

