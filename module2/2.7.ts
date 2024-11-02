{
    //generic constraint with keyof operator
    type vehical ={
        bike :string;
        car:string;
        ship:string
    }
    type owner ="bike"| "car"|"ship" //menually
    type owner2 =keyof vehical //using keyof operator
    const person :owner2='ship'
const getpropertyValue= <X,Y extends keyof X>(obj:X, key:Y)=>{
    return obj[key]

}
const user ={
    name:'abc',
    age:44,
    address:'ctg'
}

const res1 =getpropertyValue(user,'name')

    // 

}