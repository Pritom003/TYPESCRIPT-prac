{
// oop -class
// Defines a class named Animal, which serves as a blueprint for creating Animal objects
class Animal {
    // Declaring properties with types (string) to describe an Animal
    name: string;
    species: string;
    sound: string;

    // Constructor method, automatically called when a new Animal object is created
    // Initializes the properties (name, species, sound) with specific values
    constructor(names: string, species: string, sound: string ){//this are parameter like function
        this.name = names;        // Assigning the value of name passed to constructor and here this.name refers to the property name that is declared in the class and names is the perameter inthis
        this.species = species;   
        this.sound = sound;       
    } 
    
    // Method called makeSound that outputs a message to the console
    // Uses this.name and this.sound properties to create a sentence
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

// Creating a new instance (object) of the Animal class named 'dog'
// Passing "German Shepherd" as name, "dog" as species, and "Bark" as sound
const dog = new Animal("German Shepherd", "dog", "Bark");


// Calling the makeSound method on the 'dog' object
// Outputs: "German Shepherd says Bark" to the console
dog.makeSound();
class Student {
    name:string ;
    age:number ;
    roll:number
    constructor(name:string ,Age:number,roll:number){
        this.name=name 
        this.age=Age;
        this.roll=roll
    }
    studentInfo (){
        console.log(`this student name is ${this.name},${this.age}years old  and roll is ${this.roll} `);
    }
}
const Studentone=new Student("Mina",12,1)
Studentone.studentInfo()
// AS we can use the property of the class declared publicly ts make this easiar where we don have to declare class or itiate the vlaue also 
class Family {
    constructor(public member:number,public surname:string,public address:string){
       
    }
    familyInfo(){
        console.log(`${this.surname} Family has ${this.member} and lives in ${this.address}`);
    }
}
const FamilyONe=new Family(5,"Dev","Dhaka")
FamilyONe.familyInfo()




}
