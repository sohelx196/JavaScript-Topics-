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

