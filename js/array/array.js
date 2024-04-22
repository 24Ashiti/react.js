// ARRAY:

// An array is a special variable, which can hold more than one value.
// An array can hold many values under a single name, and you can access the values by referring to an index number.

// (1)Array length:-
// The length property of an array returns the length of an array (the number of array elements).
const fruits = ["a", "b", "c", "d" ];
console.log(fruits.length);


// (2)Array Push:-
// The easiest way to add a new element to an array is using the push() method.
// The push() method returns the new array length.
const color = ["pink", "orange", "purple"];
color.push("red");
// color[color.length] ="orange"
console.log(color);


// (3)Array pop():-
// The pop() method removes the last element from an array.
// The pop() method returns the value that was "popped out".
const food = ["pizza","dosa","burger"];
food.pop();
console.log(food);


// (4)Array shift():-
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the value that was "shifted out"
const veg =["poteto","cabbage","tometo"];
veg.shift();
console.log(veg);


// (5)Array unshift():-
// The unshift() method adds a new element to an array (at the beginning),and "unshifts" older elements.
// The unshift() method returns the new array length.
const person =["ashiti","palak","miral"];
person.unshift("krishna");
console.log(person);


// (5)Array changing elements:-
// Array elements are accessed using their index number.
const dev =["shiv","krishna","ganesh","ram"];
dev[2]="ganpati";
console.log(dev);


// (6)Array merging (concat):-
// The concat() method creates a new array by merging (concatenating) existing arrays.
const girls =["jasmi","urmila",];
const boys =["harsh","tushar","vasu"];
const children =girls.concat(boys);
console.log(children);

// The concat() method can take any number of array arguments.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// The concat() method can also take strings as arguments.
const ar1 = ["Emil", "Tobias", "Linus"];
const myChildrenn = ar1.concat("Peter");
console.log(myChildrenn);

  
// (7)Array splice():-
// The splice() method adds new items to an array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(1,0, "Lemon", "Kiwi");
console.log(fruit);

const fruit1 = ["Banana", "Orange", "Apple", "Mango"];
fruit1.splice(2,2, "Lemon", "Kiwi");
console.log(fruit1);

const fruit2 = ["Banana", "Orange", "Apple", "Mango"];
fruit2.splice(0,2, "Lemon", "Kiwi");
console.log(fruit2);

// (8)Array slice():-
/*The slice() method slices out a piece of an array into a new array.
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
NOTES:The method then selects elements from the start argument, and up to (but not including) the end argument.*/

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fruits2 = fruits1.slice(1);
console.log(fruits2);

const fruis1 = ["Banana", "Orange", "Apple", "Mango"];
const fruis2 = fruis1.slice(0,2);
console.log(fruis2);

// (9)Array sort():-
// The sort() method sorts an array alphabetically.

const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.sort();
console.log(fru);

/*default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than"100", because "2"is bigger than "1".
Because of this, the sort() method will produce incorrect results when sorting numbers.
You can fix this by providing a compare function */
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);


// (10)Array map():-
const numbers1 = [3, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
return value * 2;
}
console.log(numbers2);


// (11)Array filter():-
// The filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
function myFunction(value, index, array) {
return value > 18;
}
console.log(over18);


// (12)Array Max():-
console.log(Math.max(1,3,5,2));


// (13)Array Min():-
console.log(Math.min(1,3,5,2));


// (14)Array entries():
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value); // [0, "a"]


//(15)Array every():- 
const value1 = (currentValue) => currentValue > 18;
const Numbers1 = [45 , 89 , 18 , 19 , 5]
console.log(Numbers1.every(value1)); // flase


// (16)Array some():-
const value2 = (currentValue) => currentValue > 18;
const Numbers2 = [45 , 89 , 18 , 19 , 5]
console.log(Numbers2.some(value2)) //true


// (17)Array reduce():-
const Num = [1 , 2 , 3 , 4]
const init = 0;
const vals = Num.reduce((val1 , val2) => val1 * val2);
console.log(vals);


// (18)Array keys():-
const NewArry = ["india" ,  , "Austrlia" , "canada" , "brazil"];
const output  = NewArry.keys()
// const output  = NewArry
for(const keys of output){
  console.log(keys);
}
console.log(NewArry);


// (19)
