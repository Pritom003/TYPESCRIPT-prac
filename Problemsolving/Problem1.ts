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
// Problem 7
const assertionandNarrowing = (a : string | number   ): number=>{
    if (typeof a === 'string'){
        const length =a.length
        return length
    }else {
        return a *a
    }
}
const res1 =assertionandNarrowing('number')
const res2 =assertionandNarrowing(8)
console.log(res1,res2);
// problem 8
type User ={
    name: string;
    email:string
}
type Admin ={
    adminlevel:number
}
type AdminUser=User & Admin
function describeAdmin(user: AdminUser): string{
    return `Admin User: ${user.name} - Email: ${user.email} - Admin Level`
}
const admin: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminlevel: 3,
  };
const res =describeAdmin(admin)
// problem 9
type Address = {
    city?: string;
  };
  
  type Employee = {
    name: string;
    address?: Address;
  };
  
  function getEmployeeCity(employee: Employee): string | undefined {
   
    return employee.address?.city;
  }
  
  // Example usage
  const employeeWithCity: Employee = {
    name: "John Doe",
    address: {
      city: "New York",
    },
  };
  
  const employeeWithoutCity: Employee = {
    name: "Jane Doe",
  };
  
  console.log(getEmployeeCity(employeeWithCity)); 
  console.log(getEmployeeCity(employeeWithoutCity)); 
//   problem 10
const getDisplayName =(name: string | null | undefined): string=>
{
return name ?? "Anonymous"
}

console.log(getDisplayName(null));
// problem
function processData(data: unknown): string | number | undefined {
    if (typeof data === "string") {
      // If data is a string, return the uppercased version
      return data.toUpperCase();
    } else if (typeof data === "number") {
      // If data is a number, return its square
      return data * data;
    } else {
      // For other types, return undefined or handle as needed
      return undefined;
    }
  }
  
  // Examples
  console.log(processData("hello")); // Output: "HELLO"
  console.log(processData(5));       // Output: 25
  console.log(processData(true));    // Output: undefined
  

} 


