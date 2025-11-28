import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


// handling signup

const signUpBtn = document.getElementById("signUpBtn");

if(signUpBtn){

    signUpBtn.addEventListener("click" , async (e)=>{
        e.preventDefault();

        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        

        try{
                await createUserWithEmailAndPassword(auth , email , password);
                alert("User Registered Successully!!")
                window.location.href = "login.html"
        }
        catch(error){
            console.log("Something Went Wrong!!" , error); 
        }   

    })

}

// Login Handling

let loginBtn = document.querySelector("#login");

if(loginBtn){
    loginBtn.addEventListener("click" , async (e)=>{
        e.preventDefault();

        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        try{    
            await signInWithEmailAndPassword(auth , email , password);
            alert("Login Succcessfullu!");
            window.location.href = "index.html";
        }
        catch(error){
            alert("Failed in Login!!" , error);
        }
    })
}