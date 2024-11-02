{
    //  Asynchronous typescript
// promise 
type Todo ={
    userId: number; id: number; title: string; completed: boolean

}
const getTodo =async ():Promise<Todo>=>{
    const response =await fetch ('https://jsonplaceholder.typicode.com/todos/1'
        
    )
    const data = await response.json()
    console.log(data);

    return data
}
getTodo()
const createpromine= ():Promise <string>=>{

    // this is how we create a a promise 
    return new Promise <string>((resolve , reject)=>{
        const data:string ="something ";
        if (data){
            resolve(data);
        }else {
            reject('failed to get the data ')
        }
    }
    )
}
// calling create promise funstion
const showData =async ():Promise<string>=>{
    const data =await createpromine()
    return data
}
showData()
    // 
}