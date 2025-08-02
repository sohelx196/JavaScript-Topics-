let myHeading = document.querySelector("#myHeading");


window.addEventListener("keydown" , (pressedKey)=>{
   if(pressedKey.key == " "){
     myHeading.textContent = "Space"
   }else{
    myHeading.textContent = pressedKey.key
   }
})
