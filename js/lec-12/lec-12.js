// {
//     let array = [30,20,50,40,69,37,60,15,58,29,58,45,70,90,75,85]
//     let array2 =array.filter(num => num < 50)
//     console.log(array2);
// }


    // const list = [{
    //     food:{
    //         food1:{
    //            fooditem: dosa,
    //         },
    //         food2:{
    //             fooditem: pizza,
    //         },
    //         food3:{
    //             fooditem: garlicbread,
    //         },
    //         food4:{
    //             fooditem: alupuri,
    //         },
    //         food5:{
    //             fooditem: grillsandwich,
    //         }
    //     },
    //     fruits:{
    //         fruit1:{
    //             apple,
    //         },
    //         fruit2:{
    //              kiwi,
    //         },
    //         fruit3:{
    //             orange,
    //         },
    //         fruit4:{
    //             banana,
    //         },
    //         fruit5:{
    //             mango,
    //         }
    //     },
    //     vegetables:{
    //         vegetables1:{
    //             potato,
    //         },
    //         vegetables2:{
    //             carrot,
    //         },
    //         vegetables3:{
    //             broccoli,
    //         },
    //         vegetables4:{
    //             cabbage,
    //         },
    //         vegetables5:{
    //             onion,
    //         }
    //     },
    //     item:{
    //         item1:{
    //             red,
    //         },
    //         item2:{
    //             green,
    //         },
    //         item3:{
    //             orange,
    //         },
    //         item4:{
    //             yellow,
    //         },
    //         item5:{
    //             white,
    //         }
    //     },
    //     tvshows:{
    //         tvshows1:{
    //              biggboss,
    //         },
    //         tvshows2:{
    //              sharktank,
    //         },
    //         tvshows3:{
    //             anupama,
    //         },
    //         tvshows4:{
    //             gutargu,
    //         },
    //         tvshows5:{
    //             chidiyaghar,
    //         }
    //     },
    // }]
    // const input = prompt("enter fruit,food,vegtables,colour,tvshow: ");
    // if(input == "food"){
    //             console.log("food",list[0]["food"]);
    //         } 
    //         else if(input == "fruits"){
    //                     console.log("fruits",list[0]["fruits"]);  
    //         }
    //         else if(input == "vegtables"){
    //                     console.log("vegtables",list[0]["vegtables"]); 
    //         }
    //         else if(input == "item"){
    //            console.log("item:",list[0]["item"]);
    //         }
    //         else if(input == "tvshows"){
    //           console.log("tvshows:" ,list[0]["tvshows"]);
    //         }
    //         else{
    //           console.log("Please! page is not found.");
    //         }
  let list=[
    { Tour1: "Rishikesh", price:"$39", category: "tour" },
    { Tour2: "Ladak", price:"$38", category: "tour" },
    { Tour3: "Spiti", price:"$89", category: "tour" },
    { Tour4: "Goa", price:"$29", category: "tour" }, 
    { Tour5: "Kerala", price:"$59", category: "tour" },

    { Treak1: "Kedarkantha", price:"$87", category: "treak" },
    { Treak2: "Brahmatal", price:"$56", category: "treak" },
    { Treak3: "Tarsar", price:"$47", category: "treak" },
    { Treak4: "Nandadevi", price:"$32", category: "treak" },
    { Treak5: "Hampta", price:"$23", category: "treak" }
]; 

let output = prompt("Enter This Name Tour, Treak For Full List: ");
let output1=  list.filter(list => list.Tour1 == output);

console.log(output1);
