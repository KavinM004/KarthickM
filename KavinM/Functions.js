//CallBack Function

/*function subNumbers(m,n){
    let o=m-n;
    console.log("The Subtraction for your given numbers are : "+ m+"-"+ n+" :"+o);
    addNumbers(5,4);


    function addNumbers(m,n){
        let r=m+n;
        console.log("The Addition for your given numbers are : "+ m+"+"+ n+" :"+r);
       remNumbers(5,4);

        function remNumbers(m,n){
            let s=m%n;
            console.log("The Reminder for your given numbers are : "+ m+"%"+ n+" :"+s);
            
        }
    

    }
}
subNumbers(5,4);*/

//_____________________________________________________________________________________________________________________________________________________________________________________

/*setTimeout(() => {
    console.log("kavin");
},4000);*/

/*setInterval(() =>{
    console.log("Kavin Karthick");
},4000);*/

//__________________________________________________________________________________________________________________________________________________________________________

//Self Invoking Function

/*(function kavinKarthick(){
    console.log("Kavin"+"karthick");
})()*/

//____________________________________________________________________________________________________________________________________________________________________________

//Annoymous Function

/*let kavin = function(){
    console.log(40+53);
}
kavin();*/

//___________________________________________________________________________________________________________________________________________________________________________

//Using Return Function

/*function asmNumber(a,b,c,d){
    return a+b-c*d;
}
console.log(asmNumber(7,8,4,2));*/

//____________________________________________________________________________________________________________________________________________________________________________

//Promise Function

/*let m=new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve('kavin')
    },3000);
    }
)

m.then(console.log);*/

//________________________________________________________________________________________________________________________________________________________________________________________



function empolyee(Name){
    return{
    Name,
    details(){
        let msg=`My name is ${this.Name}`;
        console.log(msg);
    }
}
}

let v=empolyee('KavinM');
v.details();