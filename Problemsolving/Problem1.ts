{
    // Problem 1
    const message:string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
console.log(message);
  // Problem 2
  type Role ='admin' | 'user' | 'guest'
 const User = (name:string , age:number ,role:Role|any )=>{
    return console.log({name,age,role});}
    User('Pritom',24,'guests')
    // Problem 3
    type Person ={
        
            Name: string;
            Address: string;
            Hair: string;
            Eye_Color: string;
            Expense: string;
            Hobbies: string;
            Family_Members: number;
            job: {
                title: string;
                company: string;
                yearsOfExperience: number;
              };
            Skills: string[];
            Marital_Status: string;
            Friends: number;
        }
    
const person :Person={
    Name:'Pritom',
     Address:'ctg',
      Hair :'BLack',
       Eye_Color:'Black',
        Expense:'20k', 
        Hobbies:'reading', 
        Family_Members:6,
        job: {
            title: 'none',
            company: 'none',
            yearsOfExperience: 1
          },
         Skills:['webdevelopment', 'teaching'], 
         Marital_Status:'Unmarried', 
     Friends:4.
}
// Problem 4
interface Book {
    title: string;
    Author:string;
    Price:Number;
    Publisher: string;
    Edition: string;
}
interface Magazine{
    title: string;
    Author:string;
    Price:Number;

}
type intersectionBook =Book |Magazine
type intersectionBOOkMAgazine=Book & Magazine// intersection
// Problem 5
const reverseString =(input :string):string=>{
    const result =input.split('').reverse().join('')
    return result
}
const input ="hello"
const output=reverseString(input)
console.log(output,typeof output);
// Problem 6
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const result = sumAll(1, 2, 3, 4, 5);
console.log(result); 

}