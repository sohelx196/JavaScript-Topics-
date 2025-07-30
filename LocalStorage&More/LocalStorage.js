// localStorage --> it is used to store data & and the data is stored even the browser is closed

// sessionstorage --> it is used to store data but the data will not exist if the browser is closed. so the data is stored until the tab is opened

// cookies --> it is also used to store data but used to store a small amount of data approx 4kb 






// localStorage -->
    //  store (setItem) , fetch (getItem) , remove (removeItem) and update (setItem) , clear (used to clear all data of localstorage) data 

// to store or set the data to the browser we use localStorage.setItem() to store data

localStorage.setItem("name" , "sohel");


// to fetch or get the from the localStorage we user localStorage.getItem()

let val = localStorage.getItem("name")
console.log(val);


// to remove the data we use localStorage.removeItem() so the given val will be removed


// to update the data we still use localStorag.setItem() so the value is update but if the value is already present from before so it will override the value...







// sessionStorage -->
    //  in sessionStorage we store , update , remove or fetch same as the localStorage but the data is not present after the tab was closed...




 

