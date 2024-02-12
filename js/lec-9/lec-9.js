/* Javascript Array */  

let newarry = [1,false,"string"]
console.log(newarry);
console.log(newarry.length);
let newarry2 = ["apple" , "banana" , "watermelon" ,  , "lichi"]
console.log(newarry2);
console.log(newarry2[4]);
console.log(Object.keys(newarry2));
console.log(newarry2.length);
newarry2.length = 10;
console.log(newarry2);
console.log(Object.keys(newarry2));
newarry2[0] = "Graps"
console.log(newarry2);
let newstring  = newarry2.toString();
console.log(newstring);
console.log(typeof(newstring));


let newarray = [1 , false , "string"]
console.log(newarray);
console.log(newarray.length);

let newarray2 = ["vishva" , "srushti" , "jasmin" , , "ashiti"]
console.log(newarray2);
console.log(newarray2[0]);
console.log(Object.keys(newarray2));
console.log(newarray2.length)

newarray2.length = 10;
console.log(newarray2);
console.log(Object.keys(newarray2));
newarray2[4] = "khushi"
console.log(newarray2);
{
let newstring = newarray2.toString();
console.log(newstring);
console.log(typeof(newstring));
}


// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to String

// Array indexes strat with 0:
//[0] is the First array Element
//[1] is the Secound array Element

/* Array Length Properties */
let arry = ["krishna" , "radha" , "ganesh" , "riddhi", "sidhhi" , "shiv" , "parvati"];
console.log(arry);
console.log(arry[0]);
console.log(arry[5]);
arry.push("shrinathji");
console.log(arry);
arry.pop()
arry.pop()
console.log(arry);

arry[0] = "brmha"
console.log(arry);

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