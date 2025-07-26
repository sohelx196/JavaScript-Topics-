// setTimeout , setInterval , clearTimeout , clearInterval ==>

    // setTimeout => Runs a function once after a delay (in milliseconds).
    setTimeout(()=>{
       alert("Hello World");
    },5000)


    // setInterval => Runs a function again and again every given milliseconds.
    setInterval(()=>{
        console.log("This is setInterval which runs again and again after 2 ms")
    },2000)


    // clearTimeout => Stops a scheduled setTimeout() before it runs.
   let clearTime = setTimeout(()=>{
       console.log("This is clearTimeout");
    },5000)

      clearTimeout(clearTime) 
      
      
    // clearInterval => stop a scheduled setInterval() before it runs
    let clearInter = setInterval(()=>{
       console.log("This is clearInterval");
    },5000)

    clearInterval(clearInter);