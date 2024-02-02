// 1. Count down using a while loop
// while loop:
// let i = 10;
// while (i >= 0) {
//   document.write(i + "<br>");
//   i--;
// }

//do while loop:
// let i = 10;
// do {
//   document.writ e(i + "<br>");
//   i--;
// } while (i >= 0);

//for loop:
// let i = 10;
// for(i; i>=0; i--)
// {
//     document.write(i+"<br>")
// }


// 2. Sum of numbers from 1 to 10 using a while loop
// while loop:
// let a = 1,
//   sum = 0;
// while (a <= 10) {
//   sum += a;
//   a++;
// }
// document.write(sum);

// do while loop:
// let a = 1,
//   sum = 0;
// do
// {
//   document.write(a+"+")
//   sum+=a;
//   a++;
// }
// while(a<=10)
// document.write(sum);

// for loop:
// let a =1, sum = 0;
// for (a; a <= 10; a++)
// {
//   sum = sum + a;
//   console.log(a + "+")
// }
// console.log("="+sum);


// 3. Multiplication table for a given number using a while loop
// while loop:
  // let num = 1;
  //  let i = 1;
  //  while (i <= 10) {
  //   document.write(`${num} X ${i} = ${num * i}`);
  //    document.write("<br>");
  //    i++;
  //  }

// do while loop:
  // let num = 2;
  // let i = 1;

  // do{
  //     document.write(`${num} x ${i} = ${num * i}`);
  //     document.write("<br>");
  //     i++;
  // }while (i <= 10)

// for loop:  
    // let num = 4;
    // let i = 1;
    // for(i; i<=10; i++)
    // {
    //     document.write(`${num} x ${i} = ${num * i}`);
    //     document.write("<br>");
    // }


  // 4. Guess the number game using a while loop
  // while loop:
  let Num = 50;
  let guessCount = 0;
  let guess = 5;

  while (guessCount < guess) {
    let user = prompt("Enter a number between 1 and 100");
    guessCount++;

    if (user == Num) {
      alert(
        "Congratulations! You guess the number"
      );
      break;
    }
    if (user > Num) {
      alert("guess is too high. Try again.");
    } else if (user < Num) {
      alert("guess is too low. Try again.");
    }
    if (guessCount == guess) {
      alert(
        "Sorry, your guess limit over.");
    }
  }

// do while loop:
// {
//   let Number = 50;
//   let guessCount = 0;
//   let guess = 5;

//   do {
//     let user = prompt("Enter a number between 1 and 100");
//     guessCount++;

//     if (user == Number) {
//       alert(
//         "Congratulations! You guessed the number"
//       );
//       break;
//     }

//     if (user > Number) {
//       alert("Your guess is too high. Try again.");
//     } else if (user < Number) {
//       alert("Your guess is too low. Try again.");
//     }

//     if (guessCount == guess) {
//       alert(
//         "Sorry, your guess limit over."
//       );
//     }
//   } while (guessCount < guess);
// }

// for loop:
// {
//   let Number = 38;
//   let guess = 5;
//   let guessCount = 0;
  // console.log(guessCount)
  
//   for (guessCount; guessCount < guess; guessCount++) {
//     let user = prompt("Enter a number between 1 and 100");
//     let count = 
//     console.log(count);

//     if (user == Number) {
//       alert(
//         "Congratulations! You guess the number"
//       );
//       break;
//     }

//     if (user > Number) {
//       alert("guess is too high. Try again.");
//     } else if (user< Number) {
//       alert(" guess is too low. Try again.");
//     }

//     if (guessCount == guess) {
//       alert(
//         "Sorry, your guess limit over."
//       );
//     }
//   }
// }

 
// 5. Generate the Fibonacci sequence using a while loop
// while loop:
  // let num1 = 0,
  //   num2 = 1;
  //   while (num1 < 10) {
  //   let nextNum = num1 + num2;
  //   document.write(nextNum + "\t");
  //   num1 = num2;
  //   num2 = nextNum;
  // }

// do while:
  // let num1 = 0,
  //     num2 = 1;
  // do {
  //   let nextNum = num1 + num2;
  //   document.write(nextNum + "\t");
  //   num1 = num2;
  //   num2 = nextNum;
  // } while (num1 < 10);

// for loop:
//   let fibonacci = [];
//   fibonacci[0] = 0;
//   fibonacci[1] = 1;
//   for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }
//   document.write(fibonacci);


// 6. Calculate factorial of a number using a while loop
// while:
  // let num = 5;
  // let result = 1;
  // while (num > 1) {
  //   result *= num;
  //   num--;
  // }
  // document.write(result);
 
// do while:
//   let num = 5;
//   let result = 1;
//   do {
//     result *= num;
//     num--;
//   } while (num > 1);
//   document.write(result);

// for loop:
//     let num =6;
//     let result = 1;
//     for(num; num>1; num--)
//     {
//         result *= num;
//     }
//     document.write("Factorial of "+num+" is: " + result);


// 7. Check if a word is a palindrome using a while loop
// while:
  // let word = "level ";
  // let isPalindrome = true;
  // let i = 0;
  // let j = word.length - 1;

  // while (i < j) {
  //   if (word[i] !== word[j]) {
  //     isPalindrome = false;
  //     break;
  //   }
  //   i++;
  //   j--;
  // }

  // if (isPalindrome) {
  //   document.write(word + " is a palindrome.");
  // } else {
  //   document.write(word + " is not a palindrome.");
  // }

// do while:
//     let word = "level";
//     let isPalindrome = true;
//     let i = 0;
//     let j = word.length - 1;

//     do {
//       if (word[i] !== word[j]) {
//         isPalindrome = false;
//         break;
//       }
//       i++;
//       j--;
//     }while (i < j)

//     if (isPalindrome) {
//       document.write(word + " is a palindrome.");
//     } else {
//       document.write(word + " is not a palindrome.");
//     }

// for loop:
//   let word = "level";
//   let isPalindrome = true;
//   let i = 0;
//   let j = word.length - 1;

//   for (i; i < j; i++) {
//     if (word[i] !== word[j]) {
//       isPalindrome = false;
//       break;
//     }
//     j--;
//   }
//   if (isPalindrome) {
//     document.write(word + " is a palindrome.");
//   } else {
//     document.write(word + " is not a palindrome.");
//   }



/* 8. Calculate the power of a number using a while loop */
// while loop:
//   let base = 5;
//   let exponent = 2;
//   let result = 1;

//   while (exponent > 0) {
//     result *= base;
//     exponent--;
//   }
//   document.write(result);

// do while:
//     let base = 6;
//     let exponent = 3;
//     let result = 1;

//     do {
//       result *= base;
//       exponent--;
//     }while (exponent > 0)
//     document.write(result);

// for loop:
//     let base = 6;
//     let exponent = 3;

//     let result = 1;

//     for(exponent; exponent>0; exponent--)
//     {
//         result *= base;
//     }
//     document.write(result);


// 9. Print a pattern using a while loop
// for loop:
// let i,j;
// for(i=1;i<=5;i++)
// {
//   for(j=1;j<=i;j++)
//   {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// while loop:
// let i=1
// while(i<=10){
//   let str=""
//   let j=1
//   while(j<=6-i){
//     str+=" *"
//     j++
//   }
//   j=1
//   while(j<=i-5){
//     str+=" *"
//     j++
//   }
//   i++
//   console.log(str);
// }


//  10.Search for a specific number using a for loop and break statement 
  // let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  // let searchNumber = 45; 

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == searchNumber) {
  //     document.write("Number found at index:", i);
  //     break;
  //   }
  // }


// 11.Find the first odd number in a sequence using a while loop and break statement
// {
//   let i = 0;
//   while (true) {
//     if (i % 2 !== 0) {
//       document.write(The first odd number is: ${i});
//       break;
//     }
//     i++;
//   }
// }


// 12.Check if a number is prime using a for loop and break statement
    // let num = 2;
    // let i = 2
    //   for ( i = 2; i < num; i++) {
    //     if (num % i === 0) {
    //       document.write(num + " is not a prime number.");
    //       break;
    //     }
    //   }
    //   if (i === num) {
    //     document.write(num + " is a prime number.");
    //   }

/* 13.Loop with a conditional break statement based on user input */

  // let userInput;
  // while (true) {
  //   userInput = prompt("Enter a number (type 'exit' to stop loop):");

  //   if (userInput == "exit") {
  //     document.write("Exiting the loop based on user input.");
  //     break;
  //   }

  //   document.write("You entered: " + userInput);
  // }


/* 14.Skip printing odd numbers using a for loop and continue statement */

// {
//     let i = 1;
//     for (i=1; i <= 10; i++){
//         if (i % 2 !== 0){
//             continue;
//         }
//         document.write(i + "\t")
//     }
// }

/* 15.Skip multiples of 3 using a while loop and continue statement in javascript */
  // let number = 1;
  // while (number <= 20) {
  //   if (number % 3 == 0) {
  //     number++;
  //     continue;
  //   }
  //   document.write(number + "\t");
  //   number++;
  // }


/* 16.Print even numbers in a specific range using a for loop and continue statement */
    // let startNum = prompt('Enter the starting number');
    // let endNum = prompt('Enter the ending number');
    // let i;
    // for(i = startNum; i <= endNum; i++)
    // {
    //     if(i % 2 !== 0)
    //     {
    //         continue;
    //     }
    //     document.write(i + "\t")
    // }

/* 17.Skip numbers divisible by 5 using a do-while loop and continue statement */
    // let i = 0;
    // let num = prompt("enter a number");
    // do {
    //   i++;
    //   if (i % 5 == 0) {
    //     continue;
    //   }
    //   document.write(i + "\t");
    // } while (i < num);
