let apiurl="https://restcountries.com/v3.1/all";
fetch(apiurl).then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
    // console.log(val);
    for(let i=0;i<val.length;i++){
         if(val[i].name.common=="Peru"){
        console.log(val[i].capital);
    }
    }
})
.catch((err)=>{
    console.log("Error:",err);
});