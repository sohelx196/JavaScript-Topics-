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





