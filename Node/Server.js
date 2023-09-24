function operation(a,b,name){
    switch(name){
        case 'add':
            return a+b;
            break;

        case 'sub':
            return a-b;

        case 'mul':
            return a*b;

        case 'div':
            return a/b;
    }
}
console.log("Final Value : ",operation(10,20,"add"));
console.log("Final Value : ",operation(10,20,"sub"));
console.log("Final Value : ",operation(10,20,"mul"));
console.log("Final Value : ",operation(10,20,"div"));