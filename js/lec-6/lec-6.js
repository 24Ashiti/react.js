

//  var bar = function foo (){};
//  console.log(bar === foo);

 console.log(1+2+'1')
 console.log('1'+1+2)
 console.log("8" > "99")
 console.log("23" > "19")

 const f= new Boolean(false);
 if(f){
    console.log(1);
 }else{
    console.log(2);
 }
 console.log(typeof f);

 let x=100;
 let y=x++;
 let z=++x;

 let n = (x==y) ? z++ : ++z;
 console.log(n);

 var a = 0;
  if(10 > 9 > 8){
    a += 1;
  }
  console.log(a);