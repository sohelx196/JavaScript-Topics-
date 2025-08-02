let div = document.querySelector("#mouse");

window.addEventListener("mousemove" , (val)=>{
    console.log(val)
    div.style.top = val.clientY + "px";
    div.style.left = val.clientX + "px";
})

// div.addEventListener("mouseover" , ()=>{
//     div.style.backgroundColor = "blue"
// })

// div.addEventListener("mouseout" , ()=>{
//     div.style.backgroundColor = "gray"
// })