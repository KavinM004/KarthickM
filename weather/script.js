let apiurl='https://api.openweathermap.org/data/2.5/weather?q=peru&appid=893ce93d19df342cf40bbf0822359f8d';
fetch(apiurl).then((response)=>{
    if(response.status===200){
        return response.json();
    }
})
.then((val)=>{
    let kavin=document.getElementById("btn");
    kavin.onclick=function(){
        kavin.innerHTML=val.main.temp;
    }
})
.catch((err)=>{
    console.log("Error",err);
})