{
//constraints
const addCourseToStudent =<T extends {id:number ;name:string;
    email:string
}>(student :T )=>{
    const course ='Next Level developer' 

return { ...student ,course}

}
const student3=addCourseToStudent({id:22,name:'fdf' ,email:'email'})
const student1=addCourseToStudent <{
    id: number;
    name: string;
    email: string;
    devtype: string;
}>({
    id:123,
    name:'Mry',
    email:'xyz@gmail.com',
    devtype:'react'
})
const student2=addCourseToStudent({
    id:124,
    name:'Jkl',
    email:'jkl@gmail.com',
    hasWatch:'Apple'
})

    // 
}