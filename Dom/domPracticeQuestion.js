let domAccess = document.querySelector("h3"); //Accessed By Query Selector
let hiddenEle = document.querySelector("p");
// console.dir(domAccess.innerText);

console.dir(hiddenEle.textContent); //Here hidden element also visible with the help of textContent

domAccess.innerHTML = domAccess.innerHTML + "Sohel Sheikh";

console.log(domAccess.innerHTML); // value was changed
