
let buttonAccess = document.querySelector("button");
let mode = "light"; 

let body = document.querySelector("body")


buttonAccess.addEventListener("click" , () => {
    if(mode == "light"){
        mode = "dark";
        body.style.backgroundColor = "black";
        // buttonAccess.innerText = "Switch to Light";
        body.style.color = "white";
        
    }else {
        mode = "light";
        body.style.backgroundColor = "white";
        // buttonAccess.innerText = "Switch to Dark";
        body.style.color = "black";
    
    }
     console.log(mode);
});