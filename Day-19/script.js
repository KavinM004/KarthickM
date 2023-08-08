// function addNumber(num1,num2){
//     try{
//         if(num2>num1){
//         throw new Error("num2 is Greater than A!!!!");
//         }
//         let output=num1-num2;
//         console.log("Output :",output)
//     }
//     catch(err){
//         console.log("Error Occurred :",err);
//     }
// }

// addNumber(40,20);

//-------------------------------------------------

// function kavinM(){
//     let arr=[1,2,3,4,5];
//     try{
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]%2!==0){
//                 console.log(arr[i]);
//             }
//         }
//     }
//     catch(err){
//         console.log("Error Occurred :",err);
//     }
// }
// kavinM();

//-------------------------------------------------------------

// async function restCountries(){
//     let url= "https://restcountries.com/v3.1/all";
//     try{
//         let response=await fetch(url);
//         let data= await response.json();
//         for(let i=0;i<data.length;i++){
//                 console.log(data[i].flag);
//         }
//     }
//     catch(err){
//         console.log("Error Occurred :",err);
//     }
// }

// restCountries();

//--------------------------------------------------------------------

function eatCakes(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            let fav="Red Velvet";
            reslove(fav);
        },2000);
    });
}

async function favCakes(){
    try{
        let fav= await eatCakes();
        console.log("Yes,I Got it My Flavor Finally",fav);
        console.log("let's Eat Other Berfore Your Favorite!!!")
    }
    catch(err){
        console.log("Missing Falvor!!!...")
    }
}

favCakes();