// target , type , preventDefault ==> 

    // event.target tells you which element was actually clicked or interacted with.

    // event.type tells you which event happened, like "click", "keyup", "submit", etc.

    // preventDefault is a method that prevents the browser's default behavior when an event occurs.




// Event Bubbling and event capturing ==>

    // Event Bubbling => In event bubbling, the event starts from the innermost element and bubbles up (goes upward) to the outer elements.

    // Event capturing => In event capturing, the event is caught from outer to inner (top-down).
    // To use capturing, you pass true as the third argument to addEventListener.