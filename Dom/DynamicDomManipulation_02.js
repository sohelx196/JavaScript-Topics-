// Dynamically Dom Manipulation ==>


    // create element first
    // then append/prepend karo jaha bhi element chahiye


let firstElement = document.createElement("h1");
firstElement.textContent = "Hello , this is created by JS";
document.querySelector("body").prepend(firstElement);