// console.log("Kavin");
// setTimeout(()=>{
//     console.log("M")
// },2000)
// console.log(" karthick")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function walk(callbac){
    console.log("Kavin");
    callbac();
}

function run(){
    console.log("Karthick");
}

walk(run);