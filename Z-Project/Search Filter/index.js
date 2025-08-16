let cards = [
    {
        username: "messi",
        bio: "A graphic designer",
        pic: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "ronaldo",
        bio: "A football coach",
        pic: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSpO51sGPp2TIP62MndNqX7iMn9NnT8DACRLIYyChR5WzPPoRfsjXlpmuzGKbwbgH3egz-HZn2y9BL48lub98hfeEFQ0meElMkth_tWgW8wX43VH2gd_XH0t9ZmrEr10_taCkiX9dUjpLA"
    },
    {
        username: "neymar",
        bio: "Travel blogger & photographer",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbK3jwyXqqrwq1rBpKoRXR5xEY0uFiJ4KUlR0NZrwcR0tBZmRjg2V22622x3WgXFNDtRTUWWk32a7Crb8P1vBfV40sGRg19bT8tLdh865jw"
    },
    {
        username: "mbappe",
        bio: "UI/UX designer",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqkx8o50UHl3fMxq_4k8pIY7tgVRGNRQKAKmB_kPbNCaPnldrSXezQ5p8gerPZ-31Ae9cSh7aWWK2ud3UP7y6W0Yt68I5wyQWKiAL_lH-"
    },
    {
        username: "haaland",
        bio: "Full stack developer",
        pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60"
    },
    {
        username: "iniesta",
        bio: "Content creator",
        pic: "data:image/jpeg;base64,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"
    }
];


function showUser(arr){

arr.forEach((user)=>{

const card = document.createElement("div");
card.classList.add("card")


const image = document.createElement("img");
image.classList.add("cardImg")
image.src = user.pic;

const username = document.createElement("h2")
username.classList.add("card-h2");
username.textContent = user.username;

const bio = document.createElement("p")
bio.classList.add("card-p");
bio.textContent = user.bio;

card.appendChild(image)
card.appendChild(username)
card.appendChild(bio)

 const main = document.querySelector(".main")
main.appendChild(card)


})

}

showUser(cards) 


let inp = document.querySelector("input");
inp.addEventListener("input" , (val)=>{

  let foundedUser =  cards.filter((user)=>{
      return user.username.startsWith(inp.value)
   })

   let main = document.querySelector(".main")
   main.innerHTML = ""
   showUser(foundedUser)  

   
   let notFoundMsg = document.querySelector(".msg")
   if(foundedUser.length === 0){
      notFoundMsg.style.display = "block";
   }
   else{
    notFoundMsg.style.display = "none";
   }
   
   
});