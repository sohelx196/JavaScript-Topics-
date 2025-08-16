let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let mainSection = document.querySelector(".main");
let contactList = document.querySelector("#contactList");

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
updateButtonVisibility()

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
updateButtonVisibility()
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
            updateButtonVisibility()
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




let showBtn = document.querySelector("#showBtn")
let hideBtn = document.querySelector("#hideBtn")
let contactLists = document.querySelector(".contact-container")

showBtn.addEventListener("click" , ()=>{
   let cards = JSON.parse(localStorage.getItem("cards"));
   contactList.style.display = "flex"
})

hideBtn.addEventListener("click" , ()=>{
   let cards = JSON.parse(localStorage.getItem("cards"));
   contactList.style.display = "none"

})


// hidding btn when there is no cards
function updateButtonVisibility() {
  let cards = JSON.parse(localStorage.getItem("cards")) || [];
  if (cards.length === 0) {
    showBtn.style.display = "none";
    hideBtn.style.display = "none";
  } else {
    showBtn.style.display = "inline";
    hideBtn.style.display = "inline";
  }
  
}


const search = document.querySelector(".search");
search.addEventListener("input" , (val)=>{
  

   card.filter(())

})