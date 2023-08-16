// let apiurl="https://restcountries.com/v3.1/all";
// fetch(apiurl).then((response)=>{
//     if(response.status===200){
//         return response.json();
//     }
// })
// .then((val)=>{
//     // console.log(val);
//     for(let i=0;i<val.length;i++){
//           if(val[i].name.common=="Peru"){
//         console.log(val[i].capital);
//     }
//      }
// })
// .catch((err)=>{
//     console.log("Error:",err);
// });

//--------------------------------------------------------------------------

// fetch('https://api-thirukkural.vercel.app/api?num=25')
// .then(response=>response.json())
// .then((val)=>{
//     console.log(val.line1);
//     console.log(val.line2);
//     console.log(val.tam_exp);
// })
// .catch((err)=>{
//     console.log("error",err);
// })

//--------------------------------------------------------

let apiurl='https://api.oceandrivers.com/static/resources.json';
fetch(apiurl).then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
    console.log(val.apis[0]);
})
.catch((err)=>{
    console.log("Error",err);
})