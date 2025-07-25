// we need to stop the default submit of form cause it is reloading the page

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let myForm = document.querySelector(".myForm");

form.addEventListener("submit" , (detail)=>{
    detail.preventDefault();    // now the form is not submitted default

    let card = document.createElement("div")
    card.classList.add("card");

    let profile = document.querySelector("div");
    profile.classList.add("profile");


    let image = document.createElement("img");
    image.setAttribute("src" , "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D");

    let h1 = document.createElement("h1");
    h1.textContent = "Sohel Sheikh";

    let job = document.createElement("p");
    job.textContent = "Coder";

    let email = document.createElement("p");
    email.textContent = "sohel@gmail.com";

    
    profile.appendChild(image);
    card.appendChild(profile);

    card.appendChild(h1);
    card.appendChild(job);
    card.appendChild(email);

    myForm.appendChild(card)
    
});


   