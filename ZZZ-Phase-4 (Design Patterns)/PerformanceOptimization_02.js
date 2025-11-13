// Performance Optimization or Optimization Techniques -->

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
   // means action agr hota rha and aapne ek interval batya to utne interval me aapka event chalega..
   // (chahe action kitni bhi speed se ya slow ho rha ho usse koi frk nhi pdega)


function throttling(fnc , delay){
     let timer =  0;
     return function(...args){
        let now = Date.now();
        if(now-timer >= delay){
              timer = now;
              fnc(...args);
         }
     }
}


document.querySelector("input").addEventListener("input" , throttling(
   function(user){
          console.log("Hurrahh!!! Throttling is workedd...")
   },2000
));


// Lazy Loading Images (with InterSectionObserver)












// 12 Nov 2025 work -->
    // All subject pyq imp questions...
    // further video 2 concept by tommorow...
    // 20 pushups