// functions to interact with the User: alert , prompt and confirm.


// alert("Hello User");
// window.alert("this is javascript");


// {
//     let  vivek;
//     vivek = true;

//     alert(vivek ? "Nagative User" : "Positive User");
// }


// const Message = prompt();
// document.write(Message);

// let message= confirm("this is javascript?");
// document.write(message);


/* Javascript Map Methods */


// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map


/* Methods */

{
    /* You can create a Map by passing an Array to the new Map() constructor */

    const Data = new Map([
        ["option-1" , 20],
        ["option-2" , 40],
        ["option-3" , 60],
        ["option-4" , 80]
    ])

    console.log(Data);
    console.log(Data.size);

}