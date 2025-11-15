// Performance Optimization -->

  // *** Code Splitting *** =>
      // Split that big file into small JS files, and load only what is needed.

const btn = document.querySelector("button");

btn.addEventListener("click" ,async function(){
   let result =  await import("./maths.js");
   console.log(result.add(4,5));
})