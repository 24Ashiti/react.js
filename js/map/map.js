/* Javascript Map Methods */

/*
new Map()--Creates a new Map
set()--Sets the value for a key in a Map
get()--Gets the value for a key in a Map
delete()--Removes a Map element specified by the key
has()--Returns true if a key exists in a Map
entries()--Returns an iterator with the [key, value] pairs in a Map
Property	Description
size	Returns the number of elements in a Map

*/
// new map()
const Data = new Map([
  ["option-1", 20],
  ["option-2", 40],
  ["option-3", 60],
  ["option-4", 80],
]);
console.log(Data);
console.log(Data.size);

// the set()
const newmap = new Map();
newmap.set("item-1", "car");
newmap.set("item-2", "bus");
newmap.set("item-3", "truck");
newmap.set("item-1", 50);
newmap.set("item-2", 20);
console.log(newmap);

// the get()
const newmap1 = new Map([
  ["item-1", "car"],
  ["item-2", "bus"],
  ["item-3", "truck"],
]);
newmap1.set("item-1", "truck");
console.log(newmap1);
console.log(newmap1.get("item-1"));

// the delete()
const newmap2 = new Map([
  ["item-1", "car"],
  ["item-2", "bus"],
  ["item-3", "truck"],
]);

console.log(newmap2);
console.log(newmap2.delete("item-1"));
console.log(newmap2);

// the has()
const Data1 = new Map([
  ["option-1", 20],
  ["option-2", 40],
  ["option-3", 60],
  ["option-4", 80],
]);
console.log(Data1.has("option-4"));

// the size()
const Data3 = new Map([
  ["option-1", 20],
  ["option-2", 40],
  ["option-3", 60],
  ["option-4", 80],
  ["option-4", 80],
]);
const sizes = Data3.size;
console.log(sizes);

// **
const Dat = new Map([
  ["option-1", 20],
  ["option-2", 40],
  ["option-3", 60],
  ["option-4", 80],
]);
Dat.delete("option-5");
const hasss = Dat.has("option-5");
console.log(hasss);
console.log(Dat.size);
