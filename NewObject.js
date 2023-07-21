/*let k=10;
function love(){
    var k =70;
    console.log(k);
}

function pyaar(){
    let k=40;
    console.log(k);
}

love();
pyaar();
console.log(k);*/

/*let kavin={
    Name : "kavin",
    Age : 20
}
 let nivak = kavin;
 kavin.Age = 40;
 console.log(kavin,nivak);

 let ber = [ "KavinM","KarthickM"];
 let beer = ber;
 beer[0] = "Happy Birthday KavinM";
 console.log(ber);
 console.log(beer);*/

 /*function kavinM(){
    let ka = 70;
    karthickM();

    function karthickM(){
        let kar = 80;
        nivakM();

        function nivakM(){
            let ni = 90;
            console.log(ka,kar,ni);
        }
    }karthickM();
 }kavinM();*/

 /*let love = function() {
    let a = 10;
    let b = 20;
    console.log(a + b);
 }
 love();*/

 /*let kavinM = '{"name" : "Kavin","age":20}';
 let karthick = JSON.parse(kavinM);
 console.log(typeof(karthick.name));
 console.log(typeof(karthick.age));*/

 let kavin = { 
    Name : "Kavin",
    Age : 20
 }
 let dharun = {
    Name : "Karthick",
    Age : 34
 }
 let Nirmal = {
    Name : "kumar",
    Age : 54,
 }
 
 let karthick = [kavin,dharun,Nirmal];

 console.log(karthick);

 for(let i=0;i<karthick.length;i++){
    console.log(karthick[i].Age)
 }