//  form project using manual binding => call , apply , bind

let form = document.querySelector("#myForm");

let username = document.querySelector("#name")
let role = document.querySelector("#role")
let about = document.querySelector("#about")


const userManager = {

users : [],
init : function(){
  
  form.addEventListener("submit" , this.submitForm.bind(this))
},
submitForm : function(e){
  e.preventDefault();
  this.addUser()
},
addUser : function(){
this.users.push({
    username : username.value,
    role : role.value,
    about : about.value,
  })

  form.reset()
  this.renderUi()
},

renderUi : function(){
    document.querySelector(".card").innerHTML = "";
    this.users.forEach(function(user){

        const card = document.createElement('div');
card.className = 'p-6 ';

const name = document.createElement('h2');
name.className = 'text-xl font-semibold mb-2 text-gray-800';
name.textContent = user.username;

const role = document.createElement('p');
role.className = 'text-gray-600 mb-1';
role.textContent = user.role;

const about = document.createElement('p');
about.className = 'text-gray-500';
about.textContent = user.about;

card.appendChild(name);
card.appendChild(role);
card.appendChild(about);


document.querySelector(".card").appendChild(card);

    })
}

}

userManager.init()