let k=["kavinm","2"];
let m=k[0].split("");
let n=Number(k[1]);
let r="";
for(let i=0;i<m.length;i++){
    if(i%2!=0){
        r=r+m[i].toUpperCase();
    }else{
        r=r+m[i];
    }
}console.log(r);