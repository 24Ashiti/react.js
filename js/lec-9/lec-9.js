/* Javascript Array */  

// let newarry = [1,false,"string"]
// console.log(newarry);
// console.log(newarry.length);
// let newarry2 = ["apple" , "banana" , "watermelon" ,  , "lichi"]
// console.log(newarry2);
// console.log(newarry2[4]);
// console.log(Object.keys(newarry2));
// console.log(newarry2.length);
// newarry2.length = 10;
// console.log(newarry2);
// console.log(Object.keys(newarry2));
// newarry2[0] = "Graps"
// console.log(newarry2);
// let newstring  = newarry2.toString();
// console.log(newstring);
// console.log(typeof(newstring));


// let newarray = [1 , false , "string"]
// console.log(newarray);
// console.log(newarray.length);

// let newarray2 = ["vishva" , "srushti" , "jasmin" , , "ashiti"]
// console.log(newarray2);
// console.log(newarray2[0]);
// console.log(Object.keys(newarray2));
// console.log(newarray2.length)

// newarray2.length = 10;
// console.log(newarray2);
// console.log(Object.keys(newarray2));
// newarray2[4] = "khushi"
// console.log(newarray2);
// {
// let newstring = newarray2.toString();
// console.log(newstring);
// console.log(typeof(newstring));
// }


// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to String

// Array indexes strat with 0:
//[0] is the First array Element
//[1] is the Secound array Element

/* Array Length Properties */
// let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
// console.log(arry);
// console.log(arry[0]);
// console.log(arry[5]);
// arry.push("shrinathji");
// console.log(arry);
// arry.pop()
// arry.pop()
// console.log(arry);

// arry[0] = "brmha"
// console.log(arry);

/* The Length property provides an easy way to append new elements to an array without using the push() method. */

/* The join() method also joins all array elements into a string*/
{
    /*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    let arry2 = arry.join("+")
    console.log(arry2);
    console.log(typeof(arry2));*/
}

/*Popping in Javascript Array */

{
    /*let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"]; 
    document.getElementById("demo").innerHTML = arry;
    document.getElementById("demo-1").innerHTML = arry.pop();
    console.log(arry);
    console.log(arry.length);*/
}

// The pop() Method return the value that was "popped out"
{
    /*const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    document.getElementById("demo").innerHTML = arry;

    document.getElementById("demo-1").innerHTML = arry.pop();
    document.getElementById("demo-2").innerHTML = arry.pop();
    document.getElementById("demo-3").innerHTML = arry.pop();
    console.log(arry);*/
}

// Pushing in javascript Array
/* The Push() method adds a new element to an array (at the end)*/

{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry;
    // arry.push("brahma");
    // document.getElementById("demo-1").innerHTML = arry.pop();
    // console.log(arry);
}

// {
//     const arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
//     document.getElementById("demo").innerHTML = arry.push("kartikey");
//     document.getElementById("demo-1").innerHTML = arry.length;
// }

// Shifting Element
// Javascript Array Shift()

/* The Shift() method remove the first array element and "shifts" all other element to a lower index*/
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // let arry2 = arry.shift();
    // let arry3 = arry.shift();
    // console.log(arry2);
    // console.log(arry3);
    // console.log(arry);
}

// The shift method returns the value that was "shifed out"
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // document.getElementById("demo").innerHTML = arry.shift();
    // document.getElementById("demo-1").innerHTML = arry;
}

// Javascript Array unshift()
/* The unshift() method add a new elementnto an array (at the begning), and "unshifts" older elements*/
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // arry.unshift("kartikey");
    // console.log(arry);
}

/* The unshift() method returns the new array length*/
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry.unshift("balram");
    // document.getElementById("demo-1").innerHTML = arry;
}

// changing elements
{
    // const  arry = ["krishna" , "radha" , "ganesh" , , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // arry[10] = "balram";
    
    // console.log(arry);
}

// javascript Add elements
{
    // const  arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // document.getElementById("demo").innerHTML = arry;
    // arry[arry.length] = "Ram";
    // document.getElementById("demo-1").innerHTML = arry;
}

// Javascript Array delete()
// Array elements can be deleted using the Javascript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.
{
    // let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
    // console.log(arry);
    // console.log(arry.length);
    // delete arry[4]
    // console.log(arry);
    // console.log(arry.length);

    // arry.length = 20;
    // console.log(arry);

    // arry[16] = "Sita"
    // console.log(arry);
}

// Merging (Concatenating) Arrays
{
    /*let arry1 = ["Ram" , "Lakshman" , "Shita" , "hanuman" , "lav" , "kush"];
    let arry2 = ["krishna" , "Radha" , "rukshmani" , "Tulsi" , "balram" , "Revti" , "Sudama"];
    let arry3 = ["shiv" , "parvati" , "ganesh" , "Ridhhi" , "Siddhi" , "Kartikey"];

    let arry4 = arry2.concat(arry1 , arry3)
    console.log(arry4);*/
}

 /* Splicing and Slicing Arrays */
 
 /* JavaScript Array splice() */
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)
 
{
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.splice(3  , 3 , "reactjs" , "nextjs")
    // console.log(arry2);
    // console.log(arry1);
 }

  /* JavaScript Array slice() */
// slice()
// slice(start)
// slice(start, end)
{
    // let arry1 = [45 , 89 , 21 , 2 , 57 , 23]
    // console.log(arry1);
    // let arry2 = arry1.slice(0 , 3)
    // console.log(arry2);
    // console.log(arry1);
 }
  
 /*  Array.isArray */
 {
    // console.log(Array.isArray(17));
    // console.log(Array.isArray([17]));
 }

 /*  javascript Sorting Array */
 {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.sort()
    // console.log(arry2);
 }

 /*  Reversing array */
  {
    // let arry1 = ["javascript" , "c" , "c++" , "python" , "html" , "css"];
    // console.log(arry1);
    // let arry2 = arry1.reverse();
    // console.log(arry2);
 }

 /*  Number Sort */
{
    let arry1 = [189 , 45 , 56 , 128  , 10 , 150 ]
    console.log(arry1);
    let numbersorted = arry1.sort((a  , b) => a - b)
    console.log(numbersorted);
 } 

  /*  javascript array map() */
  {
    //  const number1 = [56 , 798 , 345  ,35];
    //  console.log(number1);
    //  const number2 = number1.map(myFunction);
    //  const number3  = number2.sort()
    //  console.log(number2);
    //  function myFunction(value){
    //      return value * 2;
    //  }
 }

  /*  javascript Array flatMap() */
  {
    // let flatmap = [1 , 2 , 3 , 4]
    // let flatmap1 = flatmap.flatMap((num) => num === 3 ? [1,1] : 2)
    // console.log(flatmap1);
 }

  /* Javascript Array flat() */
  {
    // let flatarray  = [10 , 20 , [22 , 33 , [44  , 55 ,[66 , 77]]]]
    // let flatmap2  = flatarray.flat(3)
    // console.log(flatmap2);
 }

 /* javascript array filter() */
  {
    // let filterarry = ["tennis" , "baseball" , "cricket"  , "khokho" , "vollyball" , "chess"]
    // let filterarry2  = filterarry.filter((word)  => word.length < 10)
    // console.log(filterarry2);
    // let filterarry3 = filterarry2.sort()
    // console.log(filterarry3);
 }

  /* Array Map */
{
    //  let maparry = [20 , 56, 2 , 101 , 50];
    //  let maparry2 = maparry.map((item) => item*2);
    //  console.log(maparry);
    //  console.log(maparry2);
}

/*  javascript array fill method */
{
    // let fillarray  = [46 , 89 , 101 , 122 , 45]
    // console.log(fillarray);
    // let fillarray2 = fillarray.fill("None" , 1)
    // console.log(fillarray2);
}
    
/* javascript array copywithin() method */
// copyWithin(target, start)
// copyWithin(target, start, end)
 {
    //  const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
    //  console.log(fruits);
    //  const newcopy = fruits.copyWithin(1 , 3);
    //  console.log(newcopy);

    //  console.log([1, 2, 3, 4, 5 , 6].copyWithin(0, 3));

    // console.log([1, 2, 3, 4, 5 , 6  , 7].copyWithin(2, 4 , 5));

    // console.log([7,6,5,4,3,2,1].copyWithin(2, 3));
    // [1, 2, 3, 3, 4]
    }
 
 /* javascript valueof() method */ 
 {
    // let arry = [1,2,3,4,5,6,7,8,9]
    // console.log(arry.valueOf());
 }
 
 /*  JavaScript Multidimensional Array */
 
 /* A multidimensional array is an array that contains another array. */
 {
     // multidimensional array
    //  const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
 }
 
 /* Access Elements of an Array */
 {
    // const data = [[1, 2, 3], [1, 9, 4], [4, 5, 6]];
    // let data1 = data[1][1];
    // console.log(data1);
 }
 
 /* Add an Element to a Multidimensional Array */
 {
     // Adding Element to the Outer Array
 
    //  let studentsData = [['Jack', 24], ['Sara', 23]];
    //  studentsData.push(['Peter', 24]);

    //  let data = studentsData[1][1]
 
    //  console.log(studentsData);
    //  console.log(data);
 }
 
 {
     // Adding Element to the Inner Array
     {
        //  // using index notation
        //  let studentsData = [['Jack', 24], ['Sara', 23],];
        //  studentsData[1][2] = 'hello';
     
        //  console.log(studentsData);
     }
     {
         // // using push()
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData[1].push('hello');
 
         // console.log(studentsData);
     }
     {
         // the Array's splice() method to add an element at a specified index.
 
        //  let studentsData = [['Jack', 24], ['Sara', 23],];
 
        //  // adding element at 1 index
        //  studentsData.splice(0, 2 , ["peter"  , 58]);
 
        //  console.log(studentsData);
     }
 
     /*  Remove an Element from a Multidimensional Array */
 
     {
         // remove the array element from outer array
        //  let studentsData = [['Jack', 24], ['Sara', 23],];
        //  studentsData.pop();
 
        //  console.log(studentsData);
     }
     {
        //  // remove the element from the inner array
        //  let studentsData = [['Jack', 24], ['Sara', 23]];
        //  studentsData[1].pop();
 
        //  console.log(studentsData); // [["Jack", 24], ["Sara"]]
     }
     {
        //  // the splice() method to remove an element at a specified index.
        //  let studentsData = [['Jack', 24], ['Sara', 23],];
 
        //  // removing 1 index array item
        //  studentsData.splice(0,1);
        //  console.log(studentsData);
     }
 }