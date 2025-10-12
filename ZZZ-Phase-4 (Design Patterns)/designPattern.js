// Design Pattern -> A smart way to organize or structure our code to make it more readable, reusable, and maintainable. 
  
   // *** Module pattern *** => 
      //  The Module Pattern is one of the most popular design patterns in JavaScript.
      //    It is used to:

      //    Encapsulate (hide) private data and functions
         
      //    Expose only what you want (public methods)
         
      //    Avoid polluting the global scope
               //  Global variable pollution = having too many variables in the global scope that can accidentally overwrite each other.

               //  Module Pattern helps by creating private scopes, protecting your variables from being exposed globally.

let Bank = function(){
      let customerName = "John";

      function allCustomer(){
         console.log("Hello" , customerName)
      }

};
