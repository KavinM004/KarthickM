// class KavinM{
//     constructor(habit){
//         this.habit=habit;
//     }
//     kavinWork(){
//         return this.habit;
//     }
// }
// class KarthickM extends KavinM{
//     constructor(habit,addict){
//         super(habit);
//         this.addict=addict;
//     }
//     karthickWork(){
//             return this.addict;
//     }
// }

// let inVoke=new KarthickM("Kavin","Heart");
// console.log(inVoke.kavinWork(),inVoke.karthickWork());


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Kavin(Name,Age){
        this.Name=Name;
        this.Age=Age;
        this.display=function(){
            return `Hi ${this.Name}, now your age is ${this.Age}`;
        }


}
let kar=new Kavin('KavinM',21);
console.log(kar.display());