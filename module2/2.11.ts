{
// Utility types

// pick 
type Person ={
    name:string;
    age :number;
    email?:string;
    contactInfo:string
}
type NameAge =Pick<Person,"name"| "age">
// Omit
type contactInfo=Omit <Person,"name"|"age">
// required
type PersonRequired=Required<Person>
// Pertial
type PersonPertial=Partial<Person>
// Readonly
type Readonlyperson=Readonly<Person>
const person:Readonlyperson={
    name:"x",
    age:33,
    contactInfo:"324"
}
// person.name="y" err cause only readonly type 
// Record
type Myobj = Record<string,string>
const obj1 :Myobj={
    a:'a',
    b:'a',
    c:'a'
}
const EmptyObj :Record<string,unknown>={}
}