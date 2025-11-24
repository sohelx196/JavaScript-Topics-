// *** How Js work in the browser **** ?

   // Js is a single-threaded language, meaning it can execute one task at a time.

   // However, it uses an event loop and callback queue to handle asynchronous operations, allowing it to perform non-blocking tasks like fetching data from APIs or handling user interactions while still being single-threaded.  

   // This enables Js to remain responsive and efficient in managing multiple tasks concurrently without blocking the main thread.

    // Example :

       //  User clicks a button to fetch data from an API.
         //  The click event is added to the callback queue.
            //  The event loop checks if the main thread is free and processes the click event.
                //  An asynchronous fetch request is made to the API.
                     //  While waiting for the API response, Js can continue executing other tasks.
                        //  Once the API responds, the fetch callback is added to the callback queue.
                            //  The event loop processes the fetch callback when the main thread is free, updating the UI with the fetched data.        
 
   // This way, Js can handle multiple tasks efficiently without blocking the main thread, ensuring a smooth user experience.



// *** Call Stack, Web APIs, Callback Queue, Event Loop **** //

   // ** Call Stack (Execution Stack) **: 
        // js uses a call stack to keep track of function calls. When a function is invoked, it is added to the top of the stack, and when it completes, it is removed from the stack.
   
   // example :
         function firstFunction() {
            console.log("First Function");
         }
         function secondFunction() {
            console.log("Second Function");
            firstFunction();
         }
         secondFunction(); // Call Stack: [secondFunction,firstFunction]
     // After both functions complete, the call stack is empty.


         
   // ** Web APIs ** :
      // Js me kuch built-in Web APIs hote hain (jaise DOM manipulation,alert, setTimeout, fetch) jo browser provide karta hai.
      // Jab koi asynchronous operation initiate hota hai (jaise setTimeout ya fetch), toh wo Web API ke paas chala jata hai, jahan wo background me execute hota hai.  
      // web apis js ka part nahi hote, lekin browser ke dwara provide kiye jate hain.

   // Example :
         console.log("Start");

         
   // ** Callback Queue (Task Queue) ** :
         // ye ek queue hoti hai jahan completed asynchronous operations ke callbacks store hote hain.
         // event loop is queue ko monitor karta hai aur jab call stack empty hota hai, toh ye callbacks ko call stack me daal deta hai taaki wo execute ho sakein.



   // ** Event Loop ** :
         // jb bhi koi cheez web api ke through complete hoti hai, toh wo callback queue(task queue) me chali jati hai.
         // jo bhi cheeze run hoti hai wo call stack me jati hai.
         // jaise settimeout complete hota hai toh wo callback queue me chala jata hai.
         // event loop continuously check karta hai ki call stack empty hai ya nahi.
         // agar call stack empty hai toh event loop callback queue se first cheez uthata hai aur call stack me daal deta hai.
         // event loop check krta rehta hai call stack empty hai ya nahi.
         // yadi khali hai toh callback queue se first cheez uthakar call stack me daal deta hai.

   // Example :
         setTimeout(() => {
            console.log("Timeout Completed");
         }, 2000);
         console.log("End");
       // Output:
         // End
         // Timeout Completed (after 2 seconds)


