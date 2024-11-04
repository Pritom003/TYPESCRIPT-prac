{
     

class shape {
    getArea(){
        return 0
    }
   

}




class  circle extends shape {
  
    constructor( public r :number) {
        super()
    }
    getArea(): number {
        return (this.r *this.r *3.15)
    }
}
const area=new circle( 4)
const res2=new shape()
console.log(area.getArea());
console.log( res2.getArea());

}