// var x = 10;
// console.log(x);

// async function sleep()
// {
//     console.log("success")
// }

// sleep()

//console.log([1]/4); //error

//Boolean

let x : boolean;
x=true;
x=false;

//Number

let z : number = 1;

let y : number;
y = 100;
y = 29;

//ES 2020


//String
let firstname: string;
firstname = 'masAi';

//Arrays
//let list : number[] = [1, 2, 3];
// list.push("masai") error wont take string

//let list = [1, 2, "3", true]

let c: null = null;

let list : number[];
let stringList: string[];
let aa: number[] = [2, 3, 4]

let boolList : Array<number> = [1, 2, 3];
boolList.push(4)

//Tuple 
let tuple : [string, number];  //fixing length and giving type to each as well
let tuple1 : [string, boolean];  //fixing length and giving type to each as well
tuple = ["hello", 10]
tuple1 = ["hello", true]
// tuple = ["hello", "10"] error

tuple[0].substring(1);
// tuple[1].substring(1);  // error

//enums
//red, green, yellow
//0,    1,     2

enum color{
    Red,      //default red = 0, color.Red = 0
    Green = 2,
    Yellow,
    Blue = "Blue",
    // Pink error
}

enum demo {
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

let i: color = 1;
let i1: color = color.Red; //i1 = 2

//Null undefined

let u: undefined = undefined;
let n:null = null;

//Function returning a function
function l() : Function {
    return ()=>{};
}

//Void
//functions return statement can be given a particular response

// function sum(a: number,b) : number {  //response is number
//     return a + b;
// }

function sum(a: number,b) : void {  
    console.log(a+b)
}

sum(3, 4);
sum(5, "3")  //correct
sum(3, "a")// complation error

function prd(x: number, y: number) : number {
    return x*y;
}

function div(x: number, y: number) : number {
    return x/y;
}

function show(name: string) : void {
    console.log(name)
}

//Any
// let value: any;
// value = 5;
// value = "string";

//Records
let g : Record<string, number[]>={
    a: [1],
    b:[1], 
    c: [3]
}

//Objects
//interface
// interface ButtonProps {
//     label: string;
//     color: string;
//     size : number;
// }

// <Button label="aaa" onClick={()=>{}}
interface IButton{
    label: string;
    onClick: Function;
}
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
let addFn = (x : number, y : number) : void => {
    console.log("addFn", x, y);
}

//objects funcctions



// function printName({firstname, lastname} : {firstname: string, lastname: string}) : string{
//     return firstname + ", " + lastname
// }

interface Person {
    firstname: string;
    lastname: string;
    phn?: number | string;
}
// function printName({firstname, lastname="asu is default value if lastname is optional"} : Person) : string{
//      return firstname + ", " + lastname
//     
// }
function printName({firstname, lastname} : Person) : string{
    if(lastname) return firstname + ", " + lastname
    return firstname
}
console.log(printName({firstname:"masai", lastname:"school"}))

//union type
let userType : "super-admin" | "admin" | "user"
//userType = "partner"  //error

let value : number | string | boolean | null;


//Types
type RequestLoading = {
    state : "loading"
}

type RequestFailed = {
    state : "failed",
    code : number,
}

type RequestSuccess = {
    state: "success",
    response: {
        title: string,
        status: boolean,
        id: string,
        count: number,
    }
}

type NetworkState = RequestLoading | RequestFailed | RequestSuccess;


//Intersection type

interface ErrorInterface{
    status: boolean;
    error?: {
        message: string;
    }
}

interface CityData {
    cityname: {title: string}
}

interface CountryData {
    details: {
        countOfCities: number,
        capital: string
    }
}

type CityResponse = ErrorInterface & CityData;
type CountryResponse = ErrorInterface & CountryData;

let response : CityResponse = {
    status: true,
    cityname: {
        title: "Bangalore"
    }
}

//----------------------------------

interface Loading{
    a: string;
}
interface ErrorA {
    
    b: number;
}
let IState : Loading & ErrorA  ;


 IState = {
        a: "loading",
        b : 200,
    }



    //------------------------------------------------------------

    interface forObject {
    title: string;
    status: boolean;
    id: number;
}

interface INameProps{
    firstname: string;
    lastname?: string;
}

const getName = ({firstname, lastname} : INameProps) : string => {
    if(lastname) return firstname + ' ' + lastname;
    return firstname;
}

interface IAddress {
    houseNumber: number;
    street: string;
    city: string;
    postalCode: number;
    country: string;
}

interface PersonDetails{
    prefix?: string;
    phones: number;
    addresses: IAddress[];
    firstname: string;
    lastname: string;
    middlename?: string;
}

const allpersons = Array<any>();
const phonebook = (obj : PersonDetails) : void => {
    allpersons.push(obj);
}

const value1 : PersonDetails = {
    phones: 233434234,
    addresses: [
        {
            houseNumber: 234,
            street: "adf",
            city: "bbsr",
            postalCode: 34234,
            country: "usa",
        }
    ],
    firstname: "jethalal",
    lastname: "gada"
}

phonebook(value1);
console.log(allpersons)