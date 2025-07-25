let newInput = document.querySelector("#newInput");
let defaultFile = document.querySelector("#defaultFile");


// Custom Upload button
newInput.addEventListener("click" , ()=>{
   defaultFile.click();
})

defaultFile.addEventListener("change",(val)=>{
   newInput.textContent =  val.target.files[0].name
})




let main = documen.querySelector