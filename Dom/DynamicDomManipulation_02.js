// Dynamically Dom Manipulation ==>


    // create element first
    // then append/prepend karo jaha bhi element chahiye

    // 🔹 append()
       // Adds content to the end of a selected element.

    // 🔸 prepend()
      // Adds content to the beginning of a selected element.


let firstElement = document.createElement("h1");
firstElement.textContent = "Hello , this is created by JS";
document.querySelector("body").prepend(firstElement);




// changing css using Js ==>
   // using .style
let cssChange = document.querySelector("#messi")
cssChange.style.color = "pink";

   // using .classList (add , remove , toggle)
let h3 = document.querySelector("h3");
h3.classList.add("myClass")

// h3.classList.remove("myClass")   // it will remove the class

// h3.classList.toggle("myClass")   // it is used to switch the current class






