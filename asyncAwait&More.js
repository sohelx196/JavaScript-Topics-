// Synchronous Programming -->     
 // The execution will be held in a sequence which is called Syncronous Programming
console.log("Hello1"); //executed in a sequemce one by one
console.log("Hello2"); //executed i



console.log("Hello3"); //executed in a sequemce one by one


// Asynchronous Programming -->
   // In async. prog. execution will not stop at stopping method or condition else it runs the further programme and after it display the timed programme when it is completed.


//  function async(){
   
// }
// setTimeout(()=>{
//     console.log("This is async");
// } , 5000); //So the function is showed after 5 sec where 1000 = 1s 
     //(Function name , timeOfDealy)
 




// CallBack Function ==> 
    // function which is passed into another function..
    // The above method (setTimeout) also takes a callback


    // CallBack Hell  
    // When we call a callback into another call back and this is going on then it is called callback hell


    function getName(userId , getSecondUser){
        setTimeout(()=>{
            console.log("Sohel Sheikh" , userId);
            if(getSecondUser){
                getSecondUser();
            }
        },1000);
    }

// The Below are called callback Hell (nested function). To solve this problem we use the concept of Promises
    // getName(1 , ()=>{
    //     getName(2  , () => {
    //         getName(3 , ()=>{
    //             getName(4);
    //         })
    //     });
    // });






// Promises --> To overcome the callback hell we use Promises
//  we pass two built in function which is -- resolve and reject into the parameter
// When we call the resolve function the promise is completed which is Fulfilled

// There are 3 states of Promise 
// 1) Pending 
// 2) Fulfilled (resolved) 
// 3) rejected
 
let myPromise = new Promise((resolve , reject) => {
    console.log("Hello world");
    resolve("Promise is resolved");
});





// .then  method ==> we use it when we want to work when the condition is fulfilled
// .catch  method ==> we use it when we want to work when the condition is rejected

const newPromise = () =>  {
    return new Promise((resolve , reject) => {
         console.log("Hey I am a newPromise");
           resolve("This Promise is fulfilled");
         // reject("rejected using catch");
    })
};

// There are a parameter into the .then and .catch method which is :: res and err (it will show the value of resolve or rected)

let promise = newPromise();
promise.then((res) => {
    console.log("This will run when resolve occured" , res);
});

promise.catch((err) => {
    console.log("This will run when reject occured" , err);
});




// Promise Chaining --> we use nested then or catch hence it is called promise chaining

 












