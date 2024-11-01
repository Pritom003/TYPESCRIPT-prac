{
//  Function with generics
const createArray =(param:string):string[]=>{
    return [param]
}
const createArraywithGeneric =<N,T>(param1:N , param2:T):[N,T]=>{
    return [param1,param2]
}
const res1=createArray['bangladesh']
const res2=createArraywithGeneric<number, string >(1 ,'bangladesh')
    // 
    type User ={
        name :string ;
        prof:string;
        available :boolean
    }
    const rest3 =createArraywithGeneric<number, User> ( 1, {name:'x', prof:'doc', available:true})
// 

const addCourseToStudent =<T>(student :T )=>{
    const course ='Next Level developer' 

return { ...student ,course}

}
const student1=addCourseToStudent({
    name:'Mry'
})
}