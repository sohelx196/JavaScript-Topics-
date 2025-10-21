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


// Ex-1
const MyModule = (function() {
  let user = "Sohel";

  function greet() {
    console.log("Hello " + user); 
  }

  return { greet }; // now we can able to access this function outside
})();


// Ex-2 (Basic Atm System)
let Bank = (function(){
  let balance = 1000;
  let transaction = [];

  function checkbalance(){
    console.log("Your Account Balance is ₹",balance);
  }

  function withdraw(amount){
     if(amount > balance){
      console.log("Insufficient Balance!!")
     }
     else{
       balance = balance - amount;
       transaction.push({type : "deposit" , amount , balance})
       console.log("The Amount ₹" , amount , "is debited & remaining balance is ₹" , balance)
     }  
  }

  function addBalance(amount){
    balance += amount;
    console.log("₹", amount ,"added successfully!! & Total balance is ₹" , balance)
  }

  function statement(){
    console.log("Transactions" , transaction)
  } 
  
  return { checkbalance , withdraw , addBalance , statement }
})();

// Bank.withdraw(100);
// Bank.addBalance(1100); 
// Bank.statement()
// Bank.addBalance(2000);

