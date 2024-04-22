/*1. Write a function that returns the square of a number 1 to 20*/
// function square()
//  {
//     for (i = 1; i <= 20; i++) {
//         let s= i * i;
//         console.log(s);
//     }
// }
// square();

// function squareNumber(num) {
//   return num * num;
// }
// for (let i = 1; i <= 20; i++) {
//   console.log(squareNumber(i));
// }

// /*2. Write a function to convert Celsius to Fahrenheit*/
// function cel(c) {
//   return (c * 9) / 5 + 32;
// }
// let ans = cel(20);
// console.log(ans);

// /*3. Write a function to find the area of a given Rectangle*/
// function rectangle(l, b) {
//   return l * b;
// }
// console.log(rectangle(20, 15));

// /*4. Write a function to reverse a number*/
// function reverse() {
//   for (let a = 10; a >= 1; a--) {
//     console.log(a);
//   }
// }
// reverse();

/*5. Count the number of Vowels in the String*/

/*6. Write a function to calculate simple interest based on the principal amount*/
// function interest(b, r, t) {
//   return (b * r * t) / 100;
// }
// console.log(interest(12, 20, 4));

/*7. Write a function to generate a random number*/
// function ran() {
//   let ashiti = Math.random();
//   console.log(ashiti);
// }
// ran();

/*8. Write a JavaScript program to display the current day and time in the
following format.*/
// function date() {
//   let now = new Date();
//   const weekday = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   let day = weekday[now.getDay()];
//   var d = new Date(); 
//   d.setDate(16); 
//   console.log(d);
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   console.log(day, hours, ":", minutes);
// }
// date();

/*9. Write a JavaScript function that returns a passed string with letters in alphabetical order.*/
function order(string) {
  return string.split("").sort().join("");
}
console.log("ASHITI =", order("ASHITI"));

// *******************************************************************************************************************************************************************************

// =============================================================
let a1 =[11,22,33,44];
let b1 =[...a1];
b1.push(66);
console.log(a1.length === b1.length); //false

// =============================================================
var fruits =["apple", "banana", "mango", "orange"];
var fruits_len =fruits.map((ele)=>ele.length);
console.log(fruits_len); //[5,6,5,6]

// =============================================================
let chars =['A','B','A','C','B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars); //['A','B','C']

// =============================================================
function show(...args){
  let sum = 0;
  for(let i in args)
    sum += args[i];
  console.log("Total is :", sum);
}
show(40,11,5); //56

// =============================================================
const obj11= {Name:"Hello",Age:16};
const obj2= {Name:"Hello",Age:16};
console.log(obj11===obj2); //false

// =============================================================
var a ="javascript";
var sum = 0; 
for(var i = 0;i < a.length;i++){
  sum += (a.charCodeAt(i) - 'a'.charCodeAt(0));
}
console.log(sum); 47

// =============================================================
const obj1 ={ first :20,second :38,first:50};
console.log(obj1); //{first:50,second:38}

// =============================================================
let   p = 1;
if (p != null)
  console.log(1);
else 
  console.log(0); //1

// =============================================================
// function test(JavaScript){
//   return (JavaScript ? "yes" : "no");
// } 
//  ans=false;
// console.log(test(ans));//no

// =============================================================
const example =({a,b,c})=>{
  console.log(b*2,a*5,c*2);
};
example({a:0 , b:1, c:2}); //2 0 4

// =============================================================
let b =[1,2,3,4,5,6];
console.log(b.slice(2,4));// [3,4]

// =============================================================
console.log(typeof(NaN)); //Number
console.log(NaN===NaN); //false

// =============================================================

  var aa= "SkillQode Decode your skill";
  var result = aa.substring(12,20 );
console.log(result); //il

// =============================================================
let s = "0000000111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
var mid = Math.floor((l + r) / 2);
if(s[mid] == '1') {
ans = mid;
r = mid - 1;
}
else
l = mid + 1;
}
console.log(ans); //7


// =============================================================
var js = 0;
while (js < 10) 
{
     console.log(js);
     js++;
}

// =============================================================
// write a javascript function that accepts a string as a parameter and finds the longest word within the string.

function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/g);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}

console.log(longest("hello world")); 



// function largest(arr) { 
//     let i; 
//     let max = arr[0]; 
//     for (i = 1; i < arr.length; i++) { 
//         if (arr[i] > max) 
//             max = arr[i]; 
//     } 
//     return max; 
// } 
// let arr = [22, 65, 1, 39, 346]; 
// console.log("Largest in given array is " + largest(arr));   