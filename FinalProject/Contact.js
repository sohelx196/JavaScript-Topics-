

let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let mainSection = document.querySelector(".main")



form.addEventListener("submit" , (val)=>{
   val.preventDefault();

   let card = {
      image : inputs[0].value,
      name : inputs[1].value,
      contact : inputs[2].value
   }
   

   let cards = JSON.parse(localStorage.getItem("cards")) || [];
   cards.push(card);
   localStorage.setItem("cards" , JSON.stringify(cards));
   
   showcard(card);


   inputs.forEach((inp)=>{
      if(inp.type!=="submit"){
         inp.value = ""
      }
   });
   
});


window.addEventListener("DOMContentLoaded" , ()=>{
   let cards = JSON.parse(localStorage.getItem("cards"));
   cards.forEach((card)=>{
      showcard(card)
   })
})



// card is here
function showcard(data){
    let main = document.createElement("div");
   main.classList.add("contacts");

   let profiles = document.createElement("div");
   profiles.classList.add("profile");

   let image = document.createElement("img");
   image.setAttribute("src" , data.image);

   let footBaller = document.createElement("h3");
   footBaller.textContent =  data.name;

   let contact = document.createElement("p");
   contact.textContent =  data.contact;


   profiles.appendChild(image);
   main.appendChild(profiles);   
   main.appendChild(footBaller);
   main.appendChild(contact);

   mainSection.appendChild(main);
}