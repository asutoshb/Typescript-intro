// var x = 10;
// console.log(x);
// async function sleep()
// {
//     console.log("success")
// }
// sleep()
//console.log([1]/4); //error
//Boolean
let x;
x = true;
x = false;
//Number
let z = 1;
let y;
y = 100;
y = 29;
//ES 2020
//String
let firstname;
firstname = 'masAi';
//Arrays
//let list : number[] = [1, 2, 3];
// list.push("masai") error wont take string
//let list = [1, 2, "3", true]
let c = null;
let list;
let stringList;
let aa = [2, 3, 4];
let boolList = [1, 2, 3];
boolList.push(4);
//Tuple 
let tuple; //fixing length and giving type to each as well
tuple = ["hello", 10];
// tuple = ["hello", "10"] error
tuple[0].substring(1);
// tuple[1].substring(1);  // error
//enums
//red, green, yellow
//0,    1,     2
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 2] = "Green";
    color[color["Yellow"] = 3] = "Yellow";
    color["Blue"] = "Blue";
    // Pink error
})(color || (color = {}));
let i = 1;
let i1 = color.Red; //i1 = 2
//Null undefined
let u = undefined;
let n = null;
//Function returning a function
function l() {
    return () => { };
}
//Void
//functions return statement can be given a particular response
// function sum(a: number,b) : number {  //response is number
//     return a + b;
// }
function sum(a, b) {
    console.log(a + b);
}
sum(3, 4);
sum(5, "3"); //correct
sum(3, "a"); // complation error
//Any
// let value: any;
// value = 5;
// value = "string";
//Records
let g = {
    a: [1],
    b: [1],
    c: [3]
};
//object representation of what a complex function expects
// let obj : ButtonProps;
// obj = {label: "ADD", color:"red", size:32}
//Optional
// interface ButtonProps{
//     label: string;
//     color ?: string;  //color and size are optional
//     size ?: number;
// }
// let obj : ButtonProps;
// obj={label: "ADD"}
// function add(x : number, y : number) : number {
//     return x + y;
// }
// let addFn = function(x : number, y : number) : void {
//     console.log("addFn", x, y);
// }
//Arror func
let addFn = (x, y) => {
    console.log("addFn", x, y);
};
// function printName({firstname, lastname="asu is default value if lastname is optional"} : Person) : string{
//      return firstname + ", " + lastname
//     
// }
function printName({ firstname, lastname }) {
    if (lastname)
        return firstname + ", " + lastname;
    return firstname;
}
console.log(printName({ firstname: "masai", lastname: "school" }));
//union type
let userType;
//userType = "partner"  //error
let value;
let response = {
    status: true,
    cityname: {
        title: "Bangalore"
    }
};
let IState;
IState = {
    a: "loading",
    b: 200,
};
//# sourceMappingURL=index.js.map