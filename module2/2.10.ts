{
//  Mapped types

const arrayoFNumber:number[] =[1,2,3] 
const arrayofString:string[] =arrayoFNumber.map((number)=>
    number.toString()) 
    // 
    console.log(arrayofString);

    type Area ={
        height :number;
        width:number
    }
    // lookup type (eta type ber kore key er )
    type height =Area['height']
    // mapped type
    type AreaString <T>={
        [key in keyof T]:T[key];
    }
    const area1 :AreaString<{ height :string ;witdth :number}>={
        height:'1000',
        witdth:333
    }
}