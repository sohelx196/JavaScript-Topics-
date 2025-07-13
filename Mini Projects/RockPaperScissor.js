
//  Rock-Paper-Scissor Game b/w User and Computer

let user = prompt("Enter Your Chance :")
let computer = prompt("Enter Computer Chance :")


function rockPS(user , computer){
    if(user === "" && computer === "") return "Kuch Input to do pehle...Fir Khelna!!"
    if (user === computer) return "MATCH DRAW";

    if(user === "paper" && computer === "rock") return "You Won";
    if(user === "scissor" && computer === "paper") return "You Won";
    if(user === "rock" && computer === "scissor") return "You Won";

    if(user === "rock" && computer === "paper") return "Computer Won";
    if(user === "paper" && computer === "scissor") return "Computer Won";
    if(user === "scissor" && computer === "rock") return "Computer Won";
    if(user === "") return "Ummm ! Blank User value.. ";
    if(computer === "") return "Ummm ! Blank computer value";
   

}

console.log(rockPS(user , computer)) 