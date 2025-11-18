// What Is Architectural Thinking ? 

       // Architectural thinking in JS is:

            // Planning before coding            
            // Separating logic clearly            
            // Organizing code in modules             
            // Using design patterns            
            // Making code scalable & maintainable            
            // Thinking in components, layers, events, responsibilities




// using promise.all for fetching from multiple api's -->
async function ourData(){

    try{
        let [city,village] = await Promise.all([
            fetch('https://dummyjson.com/products'),
            fetch('https://dummyjson.com/products')
        ]);

       let cityData = await city.json();
       let VillageData =  await village.json()
       cityData.products.forEach(item => {
        console.log(item.title)
       });
    }
    catch(error){
      console.log(error)
    }

}


ourData()


            



// 18 Nov work =>
      
    // js  Architechture thining concept done by tommorow

    // TOC Intro
