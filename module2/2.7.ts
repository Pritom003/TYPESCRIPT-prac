{
    //generic constraint with keyof operator
    type vehical ={
        bike :string;
        car:string;
        ship:string
    }
    type owner ="bike"| "car"|"ship" //menually
    type owner2 =keyof vehical //using keyof operator
function getpropertyValue(obj:object , key:string){

}
const user ={
    name:'abc',
    age:44,
    address:'ctg'
}


    // 

}