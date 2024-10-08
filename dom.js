// DOM -- Document Object Model

// console.dir (print the special object properties)

// Dom is used for dynamic changes on our web page

// To access element in js there are some ways---

// 1.) By Id --
 
let obj = document.getElementById("heading");
console.dir(obj);

//  2.) By class -- it returns HtmlCollection

let obj2 = document.getElementsByClassName("myClass");
console.dir(obj2);

// 3 .) by tagName -- returns direct tag

let obj3 = document.getElementsByTagName("p");
console.dir(obj3);

    //   Better Way to acces element is 4.) Query Selector -- In it we can pass the above 
    //   all selector which is id,class,tagName
    // One element of html is called Node and 2 or more nodes are known as nodeList

    // querySelector -- by tagName
    let giveOnlyFirstElement = document.querySelector("p");  // only give one element
    console.dir(giveOnlyFirstElement);

    //  querySelectorAll  -- by tagName
    let givesAllElement = document.querySelectorAll("p"); //gives all element
    console.dir(givesAllElement);


   let byClass= document.querySelectorAll(".dom"); //to access by class we write dot(.)in query selector
    console.dir(byClass);

   let byId= document.querySelectorAll("#dom2"); //to access by id we write dot(#)in query selector
    console.dir(byId);


//  Properties of DOM -- 

// to print a tagName of element we use var.tagName()

let nameOf = document.querySelector("p");
console.dir(nameOf);


// innerText -- print only text of the Dom Element
// innerHTML -- print text with tag 
// textContent -- it is similar to innerText but it also show the hidden element while innertext do not show it


  
