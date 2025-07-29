

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit" , (val)=>{
   val.preventDefault();

   let main = document.createElement("div");
   main.classList.add("contacts");

   let profile = document.querySelector("div");
   profile.classList.add("profile");

   let image = document.createElement("image");
   image.setAttribute("src" , "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D");

   let footBaller = document.createElement("h3");
   footBaller.textContent = "Sohel Sheikh";

   let contact = document.createElement("p");
   contact.textContent = "934739472334";


   profile.append(image);
   main.append(profile);
   main.append(footBaller)
   main.append(contact)

   



})


