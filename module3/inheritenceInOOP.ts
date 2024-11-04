
{

// inheritence in oop

class CommonInfo {
    constructor (public surname :string, public address:string , public religion:string){

    }
    familyInfo(){
    console.log(`${this.surname} family is ${this.religion} lives in ${this.address} `);
    }
}
// basically New family is a child of the commoninfo and get the properties from parent by using extends with class name and super class
class Newfamily extends CommonInfo {
    constructor(public surname :string, public address:string , public religion:string, public familySize :number ,public haspet :boolean){
        super(surname,address,religion);
        
    }
    extrainfo(){
        console.log(`This family has ${this.familySize} members and has pet ${this.haspet}`)
    }
}
const family =new  Newfamily('Khan','3c block','Hindu',7,true)

family.familyInfo()
family.extrainfo()


}