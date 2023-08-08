/*let kavin={
    Myname :"kavin",
    Age:34,
    karthick:function(){
        return "Blood Group : B+ve";
    }
}
console.log(kavin.karthick());*/

// _____________________________________________________________________________

class Student{
    constructor(MyName,Age){
        this.person=MyName;
        this.old=Age;
    }
    get MyName(){
        return this.person;
    }
    set MyName(newMyname){
        this.person=newMyname;
    }
    get Age(){
        return this.old;
    }
    set Age(newAge){
        this.old=newAge;
    }
}

let Obj = new Student("Kavin M", 21);
console.log(Obj.Age);
console.log(Obj.MyName);