{

    class Count {
        static Total =0
        addy(){
            return (Count.Total=Count.Total+1)
        }
   
    }
    const instance2 =new Count()
    console.log(instance2.addy());



// static used for get the data from same memory 

}