{
class  Player {
    constructor( public name:string ,public readonly jerseyNO:number ,private _totalScore:number ){

    }
    AddScore(score :number){
     console.log(this._totalScore=this._totalScore+score); 

    }
    getScore(){
       console.log(this._totalScore);
    }
}
const Player1 = new Player ("Tamim" ,28 , 9000)

Player1.AddScore(10)
Player1.getScore()

// readonly can not be modified outside the class , 
// private can not be accessed outside the class and even in the child class 
// protected can not be accessed outside the class but can be accessed in the child class 
}