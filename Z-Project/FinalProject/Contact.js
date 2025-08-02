
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")
let mainSection = document.querySelector(".main")
let contactList = document.querySelector("#contactList")

form.addEventListener("submit" , (val)=>{
   val.preventDefault();
   
   let card = {
      image : inputs[0].value,
      name : inputs[1].value,
      contact : inputs[2].value
   }





   let cards = JSON.parse(localStorage.getItem("cards")) || [];
   cards.push(card)
   localStorage.setItem("cards" , JSON.stringify(cards))

   showcard(card);
   noCardMsg()

    inputs.forEach((inp)=>{
      if(inp.type!=="submit"){
         inp.value = ""
      }
   });
})




window.addEventListener("DOMContentLoaded" , ()=>{
 let cards = JSON.parse(localStorage.getItem("cards")) || [];
 cards.forEach((val)=>{
   showcard(val)
 })
 noCardMsg()
})




// card is here
function showcard(data) {


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

   
 
   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.classList.add("deleteBtn");

   let edit = document.createElement("button")
   edit.textContent = "Edit";
   edit.classList.add("edit")

  
   profiles.appendChild(image);
   main.appendChild(profiles);
   main.appendChild(footBaller);
   main.appendChild(contact);
   main.appendChild(deleteBtn);
   main.appendChild(edit);
   contactList.appendChild(main);



   
      deleteBtn.addEventListener("click" , ()=>{
            main.remove()
   
            let cards = JSON.parse(localStorage.getItem("cards")) || [];
            let updated = cards.filter((c) => !(c.name === data.name && c.contact === data.contact));
            localStorage.setItem("cards" , JSON.stringify(updated));
            noCardMsg()
      })

}


function noCardMsg(){
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  let noCardMsg = document.querySelector("#noCardMsg");

  if(cards.length === 0){
    noCardMsg.style.display = "block"
  }
  else{
   noCardMsg.style.display = "none"
  }   

}