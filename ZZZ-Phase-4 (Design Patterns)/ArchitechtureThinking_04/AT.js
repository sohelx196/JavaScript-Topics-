// What Is Architectural Thinking ? 


       // Architectural thinking means:

            // Planning before coding            
            // Separating logic clearly            
            // Organizing code in modules             
            // Using design patterns            
            // Making code scalable & maintainable            
            // Thinking in components, layers, events, responsibilities


  // ***  (AT concept 1) Separation of Concerns ***
      // seperate the dom code (ui code) & logic code.
      // Divide your code so each part does only ONE job.

             //   You achieve this by:
                 //     ✔ small functions
                 //     ✔ separating UI from logic
                 //     ✔ separating API calls
                 //     ✔ separating components (React)


// Without Seperation Concern  ->
        
    // Right now everything is mixed together:

        // DOM selection 
        // Event listener 
        // Fetch logic 
        // UI update logic 
        // 👉 All inside one function — this violates Separation of Concerns.
        
async function ourData(){
    let p = document.querySelector("#another");
    let btn = document.querySelector("button");
    
    btn.addEventListener("click" , async function() {
        
        try{
            // with Promise.all we are able to fetch multiple api at a time.
            let [city,village] = await Promise.all([
            fetch('https://api.adviceslip.com/advice'),
            fetch('https://api.adviceslip.com/advice')   
        ]);
        let cityData = await city.json();
        let VillageData =  await village.json();
        p.innerText =  cityData.slip.advice;   
    }
    catch(error){
        console.log(error);
    }

})
}
ourData();


// With Seperation Concern all are stuructured here ->
     //  ✔ 1. Function to fetch advice
     //  ✔ 2. Function to update UI
     //  ✔ 3. Function to handle click
     //  ✔ 4. Initialization function

async function getQuote() {
    
    try{
       let rawQuote = await fetch("https://api.adviceslip.com/advice");
       let quote = await rawQuote.json();

       return {quote};
    }
    catch(error){
        console.log(error);
    }
}

function updateUi(quotes){
    let p = document.querySelector("p");
    p.innerText = quotes;
}

async function handleClick(){
    let {quote} = await getQuote();
    updateUi(quote.slip.advice);    
}

function initialize(){  
    let btn = document.querySelector("button");
    btn.addEventListener("click",handleClick);
}

initialize();



// ***  Custom Utilities *** :>
     
    //  A self made small tool function that does one thing very well.
            // To avoid rewriting the same logic again and again
            // To separate common tasks into clean, small functions 
         

// Example =>
    // insted of this :
        //   const res = await fetch(url);
        //   const data = await res.json();

    // we create a utility function:
      async function api(url) {
          return (await fetch(url)).json();
      }

    // Use it anywhere:
       const result  = await api("https://api.adviceslip.com/advice");
       console.log(result);
       
       
       


 // ***   Shallow copy and Deep copy  ***  =>
  
  
  
  
  
  
  
  
  
  


 // 19 Nov work =>
      
    // js  Architechture thining concept done by tommorow
    // asysnchronous practice
    // TOC Intro
