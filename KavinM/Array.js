const arr   = [1,2,4,0,5]
  let s="";
   for(let i = 0; i < arr.length; i++) {
      var formattedNumber = ("0" + arr[i]).slice(-2);
      s= s + " " + formattedNumber  ;
   }
   console.log(s);
   let g = s.split(" ");
   console.log(g);
   let t = g.splice(0, 1);
   console.log(t);
   let max = g[0];
  let min = g[0];
  console.log(max);
  console.log(min);
