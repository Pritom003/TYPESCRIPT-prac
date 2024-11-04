{
// instance of guard 
class Animal {
    name :string ;
    species:string
    constructor (name:string, species:string){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log('making sound');
    } }
    class Dog extends Animal {
        constructor ( name:string , species : string , public sound :string){
           super(name ,species)
        }
        getDog(){
            console.log(`${name} sounds ${this.sound}`);
    
        }
    }
    class Cat extends Animal {
        constructor ( name:string , species : string , public sound :string){
           super(name ,species)
        }
        getCat(){
            console.log(`${name} sound meow`);
        }
    }
 const iscat =(animal:Animal): animal is Dog=>{
    return animal instanceof Dog
 }


const getAnimal =(animal:Animal)=>{
    if( animal instanceof Dog){
        animal.getDog()
    }else if (animal instanceof Cat){
        animal.getCat()
    }else {
        animal.makeSound()
    }
}
const dog =new Dog ("Mr Dog" , "dog","bark")
const cat=new Cat ("Mr cat" , "cat","mewao")
// dog.getDog()


}