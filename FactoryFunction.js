let Empolyee={
    Name:"Kavin M",
    Age:21,
    Blood:'B+VE',
    Email:'karthickkavin004@gmail.com',
    details:function(){
    let display=`My Name is ${this.Name},i am ${this.Age} years old.My Blood Group is ${this.Blood}, In any case Emercency Mail too ${this.Email}`;
    console.log(display);
}
};
Empolyee.details();

