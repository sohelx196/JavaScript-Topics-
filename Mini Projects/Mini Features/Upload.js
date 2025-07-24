let upload = document.querySelector("#upload");
let file = document.querySelector("#file");

upload.addEventListener("click" , ()=>{
     file.click();
})

file.addEventListener("change" , (val)=>{
   upload.textContent = val.target.files[0].name;
})



// Limit feature js -->
let textarea = document.querySelector("#textarea");
let limit = document.querySelector("#limit");

let maxLimit = 20;

textarea.addEventListener("input" , ()=>{
     let lenght =  textarea.value.length;
     limit.textContent = `Limit : ${lenght}/${maxLimit}`

     if(lenght>maxLimit){
        limit.style.color = "red"
        limit.textContent = "Limit is crossed"
     }else{
          limit.style.color = "white"
     }
})


