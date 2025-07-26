let form = document.querySelector("form");
let nm = document.querySelector("#name");


form.addEventListener("submit" , (val)=>{
    val.preventDefault();

   if(nm.value.length == ""){
      document.querySelector("#msg").style.display = "initial";
   }
   else{
     document.querySelector("#msg").style.display  = "none"
   }

});


// pattern attribute & custom regix 
   //   (chatgpt it)


   