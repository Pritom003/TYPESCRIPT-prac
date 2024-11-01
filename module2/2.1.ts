{
    // type assertion 
let anything :any;
anything="next level";
anything=2222;
// (anything as number).
const kgToGm = (value : string | number |undefined )=>{
    if (typeof value === 'string'){
        const convertedBalue = parseFloat(value)*1000
        return `convertedBalue value is ${convertedBalue}`
    }
    if(typeof value ==='number'){
       return value*1000
    }
}
const result = kgToGm(1000) as number
const result2 = kgToGm('1000') as string
type CustomError= {
    message :string
}
try {

}catch(error){
    console.log((error as CustomError) .message);
}
    // 
}