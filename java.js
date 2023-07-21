let Elements = [1,2,3,4,5,6,7,8];
let newArr=Elements.map((num)=> Math.pow(num,2));
console.log(newArr);

//___________________________________________________________________________________________

let Element = [1,2,3,4,5,6,7,8];
let newAr=Elements.map(function(kavin){
        return kavin+2;
})
console.log(newAr);

let array=['MALAYALAM',"vid",'RACECAR'];
let newArray=array.filter((item)=>{
        let compare=item.split("").reverse("").join("");
        if(compare===item){
                console.log(item);
        }
})

let kar=[1,3,2,5,6,5,4,9];
let newB=kar.reduce((acc,ind)=>{
        return acc+ind;
})
console.log(newB)