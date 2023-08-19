// Array destructure

let k=[1,2,3,4];

let [a,b,c,d]=k;

console.log(a,b,c,d);

//-----------------------------------------
// obj destructure
let r={
    Name:'Kavin M',
    Age:32
};

let {Name,Age}=r;
console.log(Name,Age);

//--------------------------------

// property shorthand

var name='kavin';
var age=21;

const m= {name,age};
console.log(m);
