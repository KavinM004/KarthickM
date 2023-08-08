// console.log("Kavin");
// setTimeout(()=>{
//     console.log("M")
// },2000)
// console.log("karthick")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function walk(callbac){
//     console.log("Kavin");
//     callbac();
// }

// function run(){
//     console.log("Karthick");
// }

// walk(run);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function playingCricket(err){
    console.log("Jolly!!,play Cricket dude:)");
    setTimeout(() => {
        console.log("Van coming,Let's hold boy's..")
        err();
    }, 2000);
}

function vanComing(){
    console.log("Let's continue,boy's");
}

playingCricket(vanComing);