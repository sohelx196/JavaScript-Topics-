

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let mainSection = document.querySelector(".main")

form.addEventListener("submit" , (val)=>{
   val.preventDefault();

   let main = document.createElement("div");
   main.classList.add("contacts");

   let profiles = document.createElement("div");
   profiles.classList.add("profile");

   let image = document.createElement("img");
   image.setAttribute("src" , inputs[0].value);

   let footBaller = document.createElement("h3");
   footBaller.textContent =  inputs[1].value;

   let contact = document.createElement("p");
   contact.textContent =  inputs[2].value;


   profiles.appendChild(image);
   main.appendChild(profiles);
   main.appendChild(footBaller);
   main.appendChild(contact);

   mainSection.appendChild(main);
   

   inputs.forEach((inp)=>{
      if(inp.type!=="submit"){
         inp.value = ""
      }
   })

})


