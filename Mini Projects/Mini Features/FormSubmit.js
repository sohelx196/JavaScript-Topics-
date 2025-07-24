// we need to stop the default submit of form cause it is reloading the page

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit" , (detail)=>{
    detail.preventDefault();    // now the form is not submitted default
    
});


