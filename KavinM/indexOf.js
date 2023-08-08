let kavin = ["karthick","dharun","nirmal","karthi"];

let  powerWho = {
    Name : 'karthick' ,
    age : 22,
    love : 'seraching',
    power : true
}

function whoPower(power){
    if(powerWho.power){
        return "Good";
    }else{
        return "bad";
    }
}



for(let i=0;i<kavin.length;i++){
    let nivak = kavin[i];


if(nivak===powerWho.Name){
        console.log(powerWho.Name);
        console.log(powerWho.age);
        console.log(powerWho.love);
        console.log(powerWho.power);
        console.log(whoPower(kavin));
}
}

