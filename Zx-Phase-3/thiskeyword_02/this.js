// keyword means reserved words or speacial words

// this keyword --> speacial keyword hai , kyuki baaki sare keyword ka nature same rehta hai but 'this' ka nature bdal jata hai is baat se ki aap ussse kaha use kr rhe ho..

// this in global scope ->
//   value => window object


// this in function ->
//   value => window object


// this in method ->  (functions which is inside and object are called method)
//   value => whole object
       // method with es5 function => result object
       // method with arrow function => window
       // method with es5 function inside es5 function => window 
       // method with arrow function inside es5 function => object
       
    //   note:: (arrow fnc apni value parent se lete hai)
    let obj = {
        username : "sohel",
        age : 20,
        city:function(){
            console.log(this)
        }
    }
    obj.city()




    // this in eventHandler ->
    // value => addEventListner pr this keyword ki value whi hai jispr event lga hua hai , yaha h1 pr event laga hai to uski value h1 hogi

    document.querySelector("h1").addEventListener("click" , function(){
       console.log(this)
    }) 


    // *****Important*****
    //  this in class ->
    //  value => class ke ander this ki value blank object hoti hai..

   