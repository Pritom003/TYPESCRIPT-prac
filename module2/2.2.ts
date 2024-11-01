{
    // interface :
type User1={
    name :string;
    age:number
}
interface User2 {
    name :string;
    age:number
}
type Roll = number 
// We can not use interface type for primitive type like Roll
type UserWithRoll = User1 & {role :string}

// interface UserWithRoll2 extends User2 { we can use user2 or user1
interface UserWithRoll2 extends User1 {
    role :string
}
const user :UserWithRoll2 ={
    name:'Pritom',
    age:24,
    role:'developer'
}
// we can do type assertion for non primitive data type in two way on is the simple type diclaration another is interface

// as function array and object itself are consider as object 
type Roll1 =number []
// interface for arary
interface Roll2 {
    [index:number] :number
}
// const rollNumber :Roll1 =[1,2,3] or
const rollNumber :Roll2 =[1,2,3]


// Function interface and type declaration

type Add =(numb1: number, numb2:number)=>number;
interface Add1 {
    (numb1 :number , numb2:number):number
}
// const add :Add =(numb1 , numb2)=>numb1+numb2; this or 
const add :Add1 =(numb1 , numb2)=>numb1+numb2;  



    // 
}