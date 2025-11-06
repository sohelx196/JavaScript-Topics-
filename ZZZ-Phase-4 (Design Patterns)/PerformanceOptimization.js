// Performance Optimization -->

// *** Debouncing *** //
    // It makes sure your function runs only once after you stop doing something — not every single time during it.
    
         // Imagine you’re typing in a search bar 🔍
         // If we call the API on every single key press, it’ll cause:
         
         // ** slow performance
         
         // So, we wait until the user stops typing for 500ms —
         // then call the search function once.
         // 👉 That’s debouncing.
            

function debounce(fnc , delay){
  let timer;
  return function(){
    clearTimeout(timer)
  }
}

function searchQuery(data){
    console.log("Searching for " , data)
}


let finalDebounce = debounce(searchQuery , 2000);
