// function loadData() {
//    var xHttp = new XMLHttpRequest();

//    xHttp.onreadystatechange = function() {
//      if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//      }
//    };
//    xHttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//    xHttp.send();

//    console.log("End of Ajax!");
// }

/*javascript async and await keyword */
// Syntax:
// async function Data(parameter1, parameter2){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
//}

// async function f(){
//     console.log("Async Action");
//     return Promise.resolve(1);
// }

// Promise in javascript
// let Promises = new Promise(function(resolve, reject){
//   resolve("promise resolved");
//    console.log(result);
// })
// .then(function(result){
//     console.log(result);
// })
// .catch(error){

// }

{
  let promises = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("promise resolved");
    }, 2000);
  });

  async function asyncFun() {
    let result = await promises;
    console.log(result);
    console.log("Hello");
  }

  asyncFun();
}
