{
// Generic Interface
interface Developer<T,y =null > {
    name :string;

    computer:{
        brand: string;
        model1:string;
        releaseYear:number;
    }
    smartWatch :T ;
    bike?:y
}
//by using  Generic type we can add dynamic type and value 
interface oneeight{
    brand :string;
    model1:string;
}
const poorDev :Developer< oneeight>={
    name:'pritom',
    computer:{
        brand:'Lenovo',
        model1:'ThinkPad',
        releaseYear:2000
        
    },
    smartWatch :{
        brand :'18',
        model1:'18',
    }
}
type Applewatch={
    brand :string;
    model1:string;
    hartTrack:boolean

}
interface bike{
    brand :string,
        enginecapacity:string
}
const RichDev :Developer<Applewatch , bike>={
    name:'pritom-v2',
    computer:{
        brand:'Apple',
        model1:'Mackbook',
        releaseYear:2023
        
    },
    smartWatch :{
        brand :'Apple Watch',
        model1:'343',
        hartTrack:true
    },
    bike :{
        brand :'Hero',
        enginecapacity:'200cc'
    }
}
// 
}