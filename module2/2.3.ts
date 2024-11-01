{
    // generics type
    type GenericsArray<param>=Array <param>
    // we can use any letter x,yz instead of param 
//  const rollNUmber :number []=[3,4,5];
//  const rollNUmber :Array<number>=[3,4,5];
 const rollNUmber :GenericsArray<number>=[3,4,5];
//  const mentors : string[]=['x','y','z','t']
//  const mentors : Array<string>=['x','y','z','t']
 const mentors : GenericsArray<string>=['x','y','z','t']

// const boolArrAY :Array<boolean>=[true,false,true]
const boolArrAY :GenericsArray<boolean>=[true,false,true]
interface User {
    name:string ;
    age:number
}
const user : GenericsArray< User> =[
    {
        name :'pritom',
        age:24
    },
    {
        name :'p',
        age:4
    }
]

    // generic tuple
    type Generictuple<X ,Y> = [X,Y]
    const  people :Generictuple<string ,string>=['x' ,'y']
    const USerwithID :Generictuple<number , {name:string , email:string}> =[
        124,{name:'xy', email:'ad@gmail.com'}
    ]
}