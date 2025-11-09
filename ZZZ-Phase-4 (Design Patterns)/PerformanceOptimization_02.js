// Performance Optimization -->

// *** Debouncing *** //
    // It makes sure your function runs only once after you stop doing something — not every single time during it.
    // "or" 
    // Don’t run the function immediately. Wait for the user to stop doing something.

         // Imagine you’re typing in a search bar 🔍
         // If we call the API on every single key press, it’ll cause:
         
         // ** slow performance
         
         // So, we wait until the user stops typing for 500ms(or any given time) —
         // then call the search function once.
         // 👉 That’s debouncing.

function debounc(fnc , delay){
   let timer;

   return function(...args){
      clearTimeout(timer);
      timer = setTimeout(() => {
          fnc(...args)
      }, delay);
   }

}

document.querySelector("input").addEventListener("input" , debounc(
   function(){
      console.log("Debounced Successfully...")
   },2000
));




// ** Throttling ** //
   // interval pr chalega
   // means action agr hota rha and aapne ek interval batya to utne interval me aapka event chalega..(chahe action kitni bhi speed ya slow ho rha ho usse koi frk nhi pdega)

function throttle(fnc , delay){
      let timer = 0;
      return function(...args){
         timer = setTimeout(
            
            fnc(...args ,  )
         ),1000
      }  
}

document.querySelector("input").addEventListener("input" , throttle(
   function(){
       console.log("Throttling happened...")
   },1000
))