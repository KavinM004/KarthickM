let str="abc ifh bad if";
let k = str.split(" ");

for (let i = 0; i < k.length; i++) {
    k[i] = k[i].charAt(0).toUpperCase() + k[i].slice(1);

} 
let m = k.join(" ").split("");
for(let i=0;i<m.length;i++){
    if(m[i]=="e"){
        m[i]="a";
    }else if(m[i]==="a"){
        m[i]="e";
    }
}
let nivak = m.join("");
console.log(nivak);
