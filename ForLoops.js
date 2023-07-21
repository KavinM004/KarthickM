// let k={
//     Name : 'Kavinn M',
//     Age : 21,
//     Blood : 'B+VE',
//     DoB : '28-06-2002',
//     Email : 'karthickkavin004@gmail.com'
// }

// for(let i in k){
//     console.log(k[i]);
// }

//For Of
// let b=[{Name:"KavinM",Age:36}]
// for(let elements of b){
//     console.log(elements);
// }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//For Each
// let char=['a','b','c','a','b','a'];
// let count=[];
// char.forEach((i)=>{
//     if(count[i]){
//         count[i]++;
//     }
//     else{
//         count[i]=1;
//     }
// })

// console.log(count)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let array=['KavinM','DharunM','NirmalM'];
let res=[];
array.forEach((item,index,arr)=>{
    console.log(res[item]="Hello"+' '+item)
})

let kavin=[1,2,3,4,5,5,6,6,7];
let copy=[];
kavin.forEach((item)=>{
    copy.push(item*2);
})
console.log(copy)