let kavin = '{"name":"Kavin","Age":32}';
let nivak = '{"Age":32,"name":"Kavin"}';
function muthSamy(kavin,nivak){
let karthick=JSON.parse(kavin);
let kcihtrak=JSON.parse(nivak);
  if(Object.keys(karthick).length !=Object.keys(kcihtrak).length){
    return false;
  }
  for(let key in karthick){
    if(!kcihtrak.hasOwnProperty(key)||karthick[key]!==kcihtrak[key]){
        return false;
    }
  }
  for(let key in kcihtrak){
    if(!karthick.hasOwnProperty(key)||kcihtrak[key]!==karthick[key]){
        return false;
    }
  }
  return true;
}
let j=muthSamy(kavin,nivak);
console.log(j);