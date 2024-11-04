{


    class  Player {
        constructor( public name:string ,public readonly jerseyNO:number ,private _totalScore:number ){
    
        }
   
        set total  (score :number){
            this._totalScore=this._totalScore+score
        }
  get score (){
   return this._totalScore
  }
    }
    const Player1 = new Player ("Tamim" ,28 , 9000)
    
    // Player1.AddScore(10)
    // Player1.getScore()
    Player1.total=122
    console.log(Player1.score);
    console.log();
    // by using get we can use the method as a property instead of function 





}