let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form");

form.addEventListener("submit" , (val)=>{
    val.preventDefault();
  
    document.querySelector("#emailError").textContent = ""
    document.querySelector("#passwordError").textContent = ""   

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d\W_]{6,}$/

;

        
    let emailAns =  emailRegex.test(email.value)
    let passwordAns =  passwordRegex.test(password.value)


    if(!emailAns){
        document.querySelector("#emailError").textContent = "Write a proper email";
        document.querySelector("#emailError").style.display = "initial"
    }
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password have at least 1 letter , at least 1 number , at least 1 special character (/, @, *) , minimum 6 character"

        document.querySelector("#passwordError").style.display = "initial"
    }

    

})