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
   


// *** Important topic ****
// Lazy Loading Images (with InterSectionObserver)
      // Lazy loading means:
      // “Don’t load an element until it’s about to appear on screen.”
      // Instead of loading every image immediately, we only load an image when it’s about to enter the viewport.

      // { InterSectionObserver } is a browser API that lets you observe when an element enters or leaves the viewport (or any container).

 
    // ⚠️ Common mistakes ****
    
    // ❌ Using display: none — hidden elements can’t be observed.
    // ✅ Use opacity: 0 instead if you want to hide them visually.
    
    // ❌ Forgetting to unobserve.
    // ✅ Always call observer.unobserve(entry.target) once it’s loaded.
    
    // ❌ Not setting width/height on images.
    // ✅ Without dimensions, the page layout jumps when the image loads (bad CLS score).
    
    // ❌ Using too small rootMargin.
    // ✅ Add a bit of margin (like 200px) so images preload smoothly.



   // *** You can lazy-load anything **** 

     // Videos (<video> tag)     
     // Iframes (e.g., YouTube embeds)     
     // Components in React or Vue (code-splitting)     
     // Background animations or counters     
     // Infinite scroll sections (load more posts  in instagram , facebookk etc..)


     // *** Why use the (data-) prefix? ***

     // Because data-* attributes are made for custom data in HTML.
     // They let us attach information to elements without breaking HTML rules.

// Example =>
   let imgs = document.querySelectorAll("img");

   let observer = new IntersectionObserver(function(entries , observer){
        entries.forEach(function(entry){
         if(entry.isIntersecting){
           let img =  entry.target;
           img.classList.add("show");
           img.src = img.dataset.src;
           observer.unobserve(entry);
         }
        })
   } , {
      root : null, // null means screen viewport
      threshold : 0.4,  // 40% screen section and then the img appear
   });
     
imgs.forEach(function (img) {
   observer.observe(img);
});





//  ***  Reflow and Repaint  ***


    // ** Reflow (Layout Change)    
    // Happens when the browser recalculates layout of elements.    

    // Example:  
    // Changing width/height    
    // Changing font-size    
    // Adding/removing DOM nodes


     // ** Repaint (Appearence Change)
     
     // Happens when appearance changes but layout same.
     
     // Example:
     // Changing color     
     // Changing background


let ul = document.querySelector("ul");
let space = document.createDocumentFragment();

for(let i=0;i<=50;i++){

   let li = document.createElement("li");
   li.textContent = i;
   space.appendChild(li)   

}
ul.appendChild(space)
// Chatgpt it for more examples...






// *** Memory Leaks : timers & event listners  ***

    // A memory leak happens when JavaScript keeps some data in memory even though you no longer need it.
       // This slowly fills RAM → app becomes slow → browser might crash.

     let timer = 0;
     let int = setInterval(() => {
        if(timer<10){
         timer++;
         console.log(timer)
        }
        else{
           clearInterval(int)   // this will clear the interval unless it keep running
           console.log("Finished...")
        }
     }, 500);











// 15 Nov 2025 work -->
   
    // TOC STUDY UNIT 1 SMALL
   
    // try to find out idea of startup (TAKE TIME)
