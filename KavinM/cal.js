function numCalculator(doo){
    // let num1 = Number(document.getElementById("numb1").value);
    // let num2 = Number(document.getElementById("bdys").value);

    let num1=Number(prompt("eewjwen"));
    let num2=Number(prompt("ewhug ewhubdw"));
    let output;
    switch (doo) {
        case "add":
            output=num1+num2;
            break;

        case 'sub':
            output=num1-num2;
            break;

        case 'mul':
            output=num1*num2;
            break;

        case 'div':
            output=num1/num2;
            break;

        default:
            output:"Invald";
    }
    const tru=confirm("let's goo");
    if(tru){
        document.getElementById('display').innerText = output;
    }else{
        document.getElementById('display').innerText = "Error";
    }
    
}

