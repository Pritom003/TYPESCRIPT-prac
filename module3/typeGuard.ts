{
// Type Guard

// typeof 
type commmortype=string|number
const add =(param : commmortype, para2:commmortype):commmortype=>{
    if (typeof param === 'number' && typeof para2 === 'number'){
        return para2+param
    }
   else{
    return para2.toString() + param.toString()
}

}

const result=add("3","5")
console.log(typeof result);
type NormalUser={
    name:string;
    age:number
}
type Admin ={
    name:string;
    age:number;
    role:string
}
const getuser=(user:NormalUser|Admin)=>{
    if ('role' in user){
        console.log(`the ${user.name} is ${user.role}`);
    }
}
// 

}