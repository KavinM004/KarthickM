// let promiseObj = new Promise((resolve,reject)=>{
//     reject("Karthick");
// });

// promiseObj.then((val)=>{
//     console.log("Success",val);
// },(err)=>{
//     console.log("Failed",err);
// });

function mission1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Mission Respected..!")
        },1000);
    })
}
function mission2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Mission Respected2...");
        },1000);
    })
}
function mission3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Mission Respected3...")
        },1000);
    })
}

mission1().then((val)=>{
    console.log(val);
    return mission2();
})
.then((val)=>{
    console.log(val);
    return mission3();
})
.then((val)=>{
    console.log(val);
    console.log("All Mission Completed")
})
.catch((err)=>{
    console.log("Mission defeat..!",err)
});

Promise.all([mission1(),mission2(),mission3()])
.then((val)=>{
    console.log(val);
    console.log("All Respected!!");
})
.catch((err)=>{
    console.log("Error",err);
})
