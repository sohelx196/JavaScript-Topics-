let upload = document.querySelector("#upload");
let file = document.querySelector("#file");

upload.addEventListener("click" , ()=>{
     file.click();
})

file.addEventListener("change" , (val)=>{
     console.log(val);
})

