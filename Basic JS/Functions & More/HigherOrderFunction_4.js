// First Class Function --> 
// Functions ko values ki tarah treat ya pass kar skte hai..

// Example -->
function firstClassFun(val){
       val();   
}

firstClassFun(function(){
    console.log("Hurrah! This is first class function passed")
})



// Higher Order Functions -->
  // HOF is a type of function in which we can pass another function in those function or return a function is also a Hof function..
 
  // Using pass into another funtion -->
      function HOF(val){     // 
            val()            //  Is a Higher order Function
      }                      //

      HOF(function(){
        console.log("This is HOF using parameter")
      })

      
  // Hof using return -->
     function usingReturn(){
        return function myFun(){
                console.log("This is a function using return...") 
        }
     }
     
     usingReturn()();