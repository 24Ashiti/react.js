//  global use 

// length , tostring , name

let max = this;
console.log(max);
  // windows()
 
this.name = "skill qode"
console.log(this.name);

// ---------------------------------

//  inner function

function grow(){
    console.log(this);
}
grow();

   // window
// ----------------------------------------------
   // construct function

   function grow(){
      this.name = 'javascript'
      console.log(name);
   }
   let newObj = new grow()
   console.log(newObj);
// ------------------------------------------
   // this keyword in arrow function

   const newfunc=() =>{
      console.log(this);
   }
   newfunc()

     // windows
// -----------------
 const obj = () =>{
   this.name='jquery'
   console.log(name);
 }
 obj();

// -------------------------------------------------

// function.length method

function greet(){

}
console.log(greet.length);

// ---------------------------------------

// function greet(a,b ,c){


// console.log(greet.length);
  
// function.tostring()
// }

// function greet(){
//    console.log('skill qode');
// }
// console.log(greet.toString());

// console.log(()=>console.log('data').toString());

// -------------------------------------------

// function.name

//  function greet(){

//  }
//  console.log(greet.name);

// -----------------------------------------

// this inside inner function

// {
//    const person={
//       name:'jack',
//       age:25,
//       greet(){
//          console.log(this);
//          console.log(this.age);
      

//          const innerfunc = () => {
//             console.log(this);
//             console.log(this.age);
//          }
//           innerfunc();
//       }
//    }
//     person.greet();
    
// }

//  function apply() method

// {
//     const newobj = {
//         fristname: 'jasmi',
//         lastname:'mulani'
//     }
//     function grow(wish , message){
//         return`${this.fristname},${wish}.${message}`;
//     }
//     const result = grow.apply(newobj,["good morning","how are you"])
//     console.log(result);
// }

// -------------------------------------
// {
//     const newobj = {
//         firstname:'ashiti',
//         lastname:'dhanani',
//     }
//     const grow =(wish ,message) => {
//         return ${this.firstname},${wish}.${message};
//     }
//      const result= grow.apply(newobj,["goodmorning","how are you"])
//       console.log(result);    
// }

// ============================================
// function borrowing method

// const item= {
//     name:'audi',
//     discription(){
//         return ${this.name} is of ${this.color} color.   
//     }
// }
//  const bike ={
    //   name:'BUGATI',
    //   color:'black'
    // }
    
    // let result  = item.discription.apply(bike)
    
    // console.log(result);
    
    // Append Array 
    
    // let color1 = ["Red", "Green", "Blue"];
    // let color2 = ["Yellow", "Black"];
    
    // // appending two arrays color1 and color2
    // color1.push.apply(color1, color2);
    
    // console.log(color1);
    
//  ==================================================   
    
    // Array Merge 
    
   //  let Array1 = ['dataObj' , 'dataArr' , 'object' , 'string']
    
   //  let Array2  = [10 , 20 , 30 , 40 , 50 , 60]
    
   //  let NewArry0 = Array1.concat(Array2)
    
   //  console.log(NewArry0);
    
   //  let NewArry = Array1.push.apply(Array1 , Array2)
    
   //  console.log(NewArry);
    
   //  console.log(Array1);



// ------------------------------------------------------------------------
   
// const student1 = {
//   name: "Jack",
//   grade: "5",
//   introduction: function () {
//     console.log(this.name + "studies in grade" + this.grade + ".");
//   },
// };

// const student2 = {
//   name: "Jimmy ",
//   grade: " 6",
// };

// let result= student1.introduction.bind(student2);

// result();  



// ----------------------------------------------------------------------------------
function Product(name, price) {
   this.name = name;
   this.price = price;
 }
 
 function Food(name, price) {
   Product.call(this, name, price);
   this.category = 'food';
 }
 
 console.log(new Product('cheese', 5).name);
 // Expected output: "cheese"