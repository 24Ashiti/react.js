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
function date() {
  let now = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[now.getDay()];
  var d = new Date(); 
  d.setDate(16); 
  console.log(d);
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   console.log(day, hours, ":", minutes);
}
date();

/*9. Write a JavaScript function that returns a passed string with letters in
alphabetical order.*/
// function order(string) {
//   return string.split("").sort().join("");
// }
// console.log("ASHITI =", order("ASHITI"));
