{
// Conditional types
type a1=null;
type b1=undefined
type x=a1 extends null ? true :false //conditional type
type y=a1 extends null ? true :b1 extends undefined? undefined:any //conditional type

type sheikh = {
    bike :string;
        car:string;
        ship:string
}
type checkvehicle <T>= T extends   keyof sheikh ? true : false

 type hasBike =checkvehicle <"car">//true
 type hasBik2 =checkvehicle <"plane">//false



// extends define a type constraint, meaning that a type must inherit or conform to a specific structure.


}