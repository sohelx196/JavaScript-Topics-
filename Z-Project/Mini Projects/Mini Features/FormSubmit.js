// we need to stop the default submit of form cause it is reloading the page

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let myForm = document.querySelector(".myForm");

form.addEventListener("submit" , (detail)=>{
    detail.preventDefault();    // now the form is not submitted default

    let card = document.createElement("div")
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");


    let image = document.createElement("img");
    image.setAttribute("src" , inputs[0].value);

    let h1 = document.createElement("h1");
    h1.textContent = inputs[1].value;

    let job = document.createElement("p");
    job.textContent = inputs[2].value;

    let email = document.createElement("p");
    email.textContent = inputs[3].value;

    
    profile.appendChild(image);
    card.appendChild(profile);

    card.appendChild(h1);
    card.appendChild(job);
    card.appendChild(email);

    myForm.appendChild(card);

    // blank value after submit
    inputs.forEach((inpt)=>{
        if(inpt.type !== "submit"){
            inpt.value = "";
        }
    });
    
    

});


   