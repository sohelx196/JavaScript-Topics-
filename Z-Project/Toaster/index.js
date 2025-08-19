

function createToster(config){
  return function(str){
     let div = document.createElement("div")
     div.textContent = str;
     div.className = `p-2 rounded-md border border-black ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} `

     document.querySelector("#parent").appendChild(div)

     setTimeout(()=>{
          document.querySelector("#parent").removeChild(div)
      },config.duration*1000)
  }
}

let toster = createToster({
    positionX : "right",
    positionY : "top",
    theme : "light",
    duration : 3
})

toster("Download will starts soon!")

setTimeout(()=>{
    toster("Cooming Soon!!")
},2000)
