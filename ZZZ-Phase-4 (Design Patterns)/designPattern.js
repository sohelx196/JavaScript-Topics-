// Design Pattern -> A smart way to organize or structure our code to make it more readable, reusable, and maintainable. 
  
   // *** Module pattern *** => 
      //  The Module Pattern is one of the most popular design patterns in JavaScript.
      //    It is used to:

      //    Encapsulate (hide) private data and functions
         
      //    Expose only what you want (public methods)
         
      //    Avoid polluting the global scope
               //  Global variable pollution = having too many variables in the global scope that can accidentally overwrite each other.

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
    console.log("Your Account Balance is ₹", balance);
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
    console.log("Your Latest Transactions" , transaction)
  } 

  
  return { checkbalance , withdraw , addBalance , statement };
 
})();
    let rashi = document.querySelector("#balancee");
    rashi.addEventListener("click" , Bank.checkbalance);

    let transaction = document.querySelector("#transaction");
    transaction.addEventListener("click" , Bank.statement);
     
    let username = document.getElementById("#")



// *** Revealing Module Pattern ***
    //     In this module pattern we do the same as above but when we going to return 
    //     the functions, so we set another name of those function in the return object..

    // return { check : checkbalance , takemoney : withdraw , credit : addBalance , transaction : statement };



// *** Factory function pattern *** 
       // A factory function is just a normal function that returns an object — instead of using a class or constructor.

       // We “call” it like a function, and it “builds” objects for us (like a factory makes products).

// Example 1 
   function hasirMart(productName , price){
  
    return{
      // productName : productName,
      // price : price,
     
      takeProduct(){
          console.log(`${productName} is taken successfully.. ₹${price}`)
      }
    }

   }
  let product1 =  hasirMart("SOAP" , 1000);
  let product2 =  hasirMart("KitKat" , 10);
  product1.takeProduct();
  product2.takeProduct();


// Example 2
  function createUser(username , password){

    return{
      login(enteredUsername , enteredPassword){
           if(enteredUsername === username && enteredPassword === password){
              alert(`Welcome ${username}`)
           }
           else{
             alert(`username or password is incorrect!!`)
           }
      }
    }

  }
  let user1 = createUser("hasir2029", "star123");
  user1.login("sohel" , "1233");

