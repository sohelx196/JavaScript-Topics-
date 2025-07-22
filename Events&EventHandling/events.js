// Events In js...


// Node.EventName (like onclick , onblur etc);

let button = document.querySelector("#myButton"); 

button.onclick = () => {
    // console.log("Hello This is Onclick Function");
    // alert("Hello Sohel...");
    for(let i=0;i<=10; i++){
        console.log("Hello May-29" , i);
    }
}

// Note :: Js always gives the priority to js file handler code instead of inline event handling



// Event Object -- It has information about how's the event is handled or which type of the event it is...

let newButton  =  document.querySelector("#button2");
newButton.onclick = (eventObject) => {
    console.log(eventObject);
    console.log(eventObject.type);
    console.log(eventObject.target); //Where the event occur..
    console.log("This is horizontal location of event occurs :" , eventObject.clientX);
}

//we can use only one element to apply events by the above fuction way...








// Better way to handle events which are {EventListners}...
// Through Event Listner we can do multiple event at a single time.
// we pass eventName and callBack function into the parameter

// We pass type of element in first place of parameter...

let eventLisBut = document.querySelector("#button3");
// We can make many EventListner..

// 1st time use
eventLisBut.addEventListener("click" , () =>{
  console.log("Congratulation!! EventListner is occured");
});

// 2nd time use
eventLisBut.addEventListener("click" , () =>{
  console.log("This is the benefit of using eventListner bcz we can use it many times");
});


// 3rd time used
eventLisBut.addEventListener("click" , (eventObjPassed) => {
    console.log(eventObjPassed.type);
    console.log(eventObjPassed.target);
    console.log("Position of Event occured at Postion X :" , eventObjPassed.clientX);
    console.log("Position of Event occured at Postion Y :" , eventObjPassed.clientY);
});


// How to remove any eventListner -- node.removeEventListner()
// Remember to remove any eventListner you need to have the same callBack function

// Let we want to remove the 2nd event listner -->
//  firstly make its variable of the function                    


const removed = () => {
  console.log("This is removed event listner");
};
eventLisBut.addEventListener("click" , removed);
removed.removeEventListner("click" , removed);
