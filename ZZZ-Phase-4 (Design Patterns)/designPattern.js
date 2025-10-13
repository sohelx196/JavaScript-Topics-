// Design Pattern -> A smart way to organize or structure our code to make it more readable, reusable, and maintainable. 
  
   // *** Module pattern *** => 
      //  The Module Pattern is one of the most popular design patterns in JavaScript.
      //    It is used to:

      //    Encapsulate (hide) private data and functions
         
      //    Expose only what you want (public methods)
         
      //    Avoid polluting the global scope
               //  Global variable pollution = having too man y variables in the global scope that can accidentally overwrite each other.
               
               //  Module Pattern helps by creating private scopes, protecting your variables from being exposed globally.


       // *** IIFE creates its own scope, meaning all variables inside it are local to that function , thats why we are not able to access it outside (encapsulated)
       // *** Only the object returned by the function (in the return statement) becomes publicly accessible.



const MyModule = (function() {
  let user = "Sohel";

  function greet() {
    console.log("Hello " + user);
  }

  return { greet };
})();

