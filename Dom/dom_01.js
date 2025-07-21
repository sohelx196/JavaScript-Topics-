// DOM -- Document Object Model
// DOM (Document Object Model) is a tree-like structure of our webpage — created by the browser from our HTML.
// Dom is used for dynamic changes on our web page

// Example ==> 

//   <body>
//     <h1>Hello Sohel</h1>
//     <button>Click Me</button>
//   </body>

// The browser turns this into a structure like:

//   Document
//     └── html
//         └── body
//             ├── h1
//             │   └── "Hello,Sohel"
//             └── button
//                 └── "Click Me"



// *** JavaScript can access, change, add, or remove anything in this tree. That’s called DOM Manipulation. ***





// console.dir (print the special object properties)

// To access element in js there are some ways---
// 1.) By Id --
 
let obj = document.getElementById("heading");
console.dir(obj);

//  2.) By class --> it returns HtmlCollection

let obj2 = document.getElementsByClassName("myClass");
console.dir(obj2);

// 3 .) by tagName --> returns direct tag

let obj3 = document.getElementsByTagName("p");
console.dir(obj3);




    //   Better Way to acces element is ==>
    
    //   4.) Query Selector -- In it we can pass the above  all selector which is id,class,tagName
    //   One element of html is called Node and 2 or more nodes are known as nodeList

    // querySelector -- by tagName
    let giveOnlyFirstElement = document.querySelector("p");  // only give one element
    console.dir(giveOnlyFirstElement);

    //  querySelectorAll  -- by tagName
    let givesAllElement = document.querySelectorAll("p"); //gives all element in a nodeList
    console.dir(givesAllElement);


   let byClass= document.querySelectorAll(".dom"); //to access by class we write dot(.)in query selector
    console.dir(byClass);

   let byId= document.querySelectorAll("#dom2"); //to access by id we write dot(#)in query selector
    console.dir(byId);


//  Properties of DOM -- 

// to print a tagName of element we use var.tagName()
let nameOf = document.getElementsByTagName("p");
console.dir(nameOf);


// innerText -- print only text of the Dom Element
// textContent -- it is similar to innerText but it also show the hidden element while innertext do not show it
// innerHTML -- print text with tag (or we can change the html tag using it)




// Some attribute to access an element ---
 
// How to get attribute value -- getAttribute() there are many attribute plz visit mdn

 let nameOfPara = document.querySelector("h3");
 console.log(nameOfPara.getAttribute("h3"));


// change style by js
let myBody = document.querySelector("body");
myBody.style.backgroundColor =   "black";

let para = document.querySelector("h3");
para.style.color = "white";
para.style.fontSize = "30px";


// How to make element using JS

let element = document.createElement("button");
element.innerText = "Submit";
console.log(element);

let mybut = element.addEventListener("click" , () =>{
  alert("Successfully Submited");
}); 
console.log(mybut);

// The button is created but does not shown in webpage
// Ways to shown the js html tags in page -- 

// 1) To add button in div (or node) in last we use -- append()
  let appendEg = document.querySelector("#appendDiv");
  appendEg.style.border = "2px solid white";
  appendEg.append(element);

  // 2) To add button in div (or node) in starting we use -- prepend()
   appendEg.prepend(element);

  // 3) To add button JUST before div (or node) but outside the div we use -- before()
   appendEg.before(element);

 // 4) To add button JUST after div  (or node) but outside the div we use -- after()
     appendEg.after(element);


// Note :: We can create any html element using these methods...

// How to remove an element using JS

let removePara = document.querySelector("h5");
removePara.remove();









// Testing Code Starts ==> 
let abcd = document.querySelector("#myWork" )
 abcd.textContent = "New Work"



// Attribute Manipulation --> (meaning changing the value of the html attribute)
// setAttribute , removeAttribute , getAttribute

// setAttribute set the value of the attribute 
let a = document.querySelector("a");  
a.setAttribute("href" , "https://sohelsheikh29.netlify.app")  // here we changed the attribute value using setAttribute...

// removeAttribute remove the value of the attribute
let myInput = document.querySelector("#input");
myInput.removeAttribute("name")
console.dir(myInput)

// getAttribute can get the value of the attribute
let getAttributes = document.querySelector("#myPortfolio");
console.log(getAttributes.getAttribute("href"));





