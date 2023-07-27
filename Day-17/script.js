let Kavin=new Promise((resolve,reject)=>{
    reject("KavinM");
});

Kavin.then((resolve)=>{
    console.log("Success",resolve);
},(reject)=>{console.log("Fail",reject);
});