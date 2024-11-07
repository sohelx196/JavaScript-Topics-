// Synchronous Programming --> 
 // The execution will be held in a sequence which is called Syncronous Programming
console.log("Hello1"); //executed in a sequemce one by one
console.log("Hello2"); //executed in a sequemce one by one
console.log("Hello3"); //executed in a sequemce one by one


// Asynchronous Programming -->
   // In async. prog. execution will not stop at stopping method or condition else it runs the further programme and after it display the timed programme when it is completed.


//  function async(){
   
// }
setTimeout(()=>{
    console.log("This is async");
} , 5000); //So the function is showed after 5 sec where 1000 = 1s 
     //(Function name , timeOfDealy)
 

// CallBack Function ==> 
    // function which is passed into another function..
    // The above method (setTimeout) also takes a callback






