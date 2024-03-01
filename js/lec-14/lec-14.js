// javascript Asyncronous Method 

// settimeout method
// setTimeout (function,delay,parameter1,parameter2,...) 

/* setTimeout(
    function(){

    }, delaytime
) */

// function print(){
//     console.log(
//         "hello javascript"
//         );
// }
// setTimeout(print,3000);

// let print = () => {
//     console.log("SetTimeout Method");
// }

// setTimeout(print,2000);

// setTimeout(
//     function greet(){
//         console.log("hello javascript");
//     }, 3000
// )

// setTimeout(
//     () => console.log("Hello World"), 4000
// )

// function greet(name , age){
//     console.log(`your name: ${name} and age: ${age}`);
// }

// setTimeout(
//     greet, 5000, "Ashiti", 21
// )

/* SetInterval*/ 
// setinterval (function , delay , parameter1 , parameter2,....)

// setInterval(
//     function greet(){
//         console.log("1");
//     },2000
// )

// setInterval(
//     () => console.log("Hello"), 3000
// )

// function greet(name , age){
//     console.log(`your name: ${name} and age: ${age}`);
// }

// setInterval(
//     greet, 5000, "Ashiti", 21
// )

/*  Current Time print every 3 seconds*/

/* task*/

setInterval(time , 2000);
function time (){
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

/* SetInterval Id */
//  function greet (name, age){
//      console.log(`your name: ${name} and age: ${age}`);
//  }

//  let id = setInterval(greet, 5000, "Ashiti", 21);
// console.log("This is Id" , id);

/* ClearTimeout */
// clearInterval(id);