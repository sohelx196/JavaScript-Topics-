// What Is Architectural Thinking ? 

       // Architectural thinking in JS is:

            // Planning before coding            
            // Separating logic clearly            
            // Organizing code in modules             
            // Using design patterns            
            // Making code scalable & maintainable            
            // Thinking in components, layers, events, responsibilities

// FETCHING DATA USING MULTIPLE API's =>
async function getData() {
    
    try{
        let response = await fetch('https://api.nationlize.io?name=nathaniel');
        let data = await response.json();
        console.log("Fetching Data...");
        setTimeout(() => {
            console.log(data.name);
        }, 2000);
    }
    catch(error){
        console.log("Error Occured : " , error);
    }
    
}       
    
getData();

            



// 17 Nov work =>

    // js  Architechture thining concept done by tommorow

    // TOC Intro
