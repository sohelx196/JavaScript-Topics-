//  Events and EventsHandeling ==>

    // An event is a signal that something has happened in the browser, like a click or a keypress, and JavaScript can listen and react to it.

    // addEventListner , removeEventListner

    // addEventListener : is used to wait for an event (like a user clicking a button) and then run code in response.

    function clickMe(){
       newEvents.textContent = "I am double clicked!!"
    }

    let newEvents = document.querySelector("#newEvent");
    newEvents.addEventListener("dblclick" , clickMe)

 

    // removeEventListner : if the eventListner is already applied and we want to remove so we use removeEventListner.

//  newEvents.removeEventListener("dblclick" , clickMe) // after this the double click not works





// Common events :
    // input , click , dblclick  , change , submit , mouseover , keyup etc..
   
    // input event --> can be used to check the events of input fields
    let myInput = document.querySelector("#myInput");
    myInput.addEventListener("input" , (val)=> {
        if(val.data !== null){
            console.log(val.data)
        }
    })  


    // change event --> The change event occurs when the value of an input, select, or textarea element changes.

    let select = document.querySelector("#select");
    let status = document.querySelector("#status");
    select.addEventListener("change" , (goat)=>{
        status.textContent = `${goat.target.value} is Selected`
    })


    
    // submit event ==>  it is used when the form is submitted and we want do something with that..(when the form is submitted so the form is reload always so we can stop it also) 
    // go through the  mini feature folder for mini sumit project :)

    


    // mouseover & mousemove ==>
    // mouseover -> Triggered once when the mouse enters an element.
    // mousemove -> Triggered every time the mouse moves inside an element.
    // (go through the mouseover.js)

    
    // keyup ==> keyup fires when you release a key on the keyboard.
    // (google it)


    