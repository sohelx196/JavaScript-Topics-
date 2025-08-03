// localStorage --> it is used to store data & and the data is stored even the browser is closed

// sessionstorage --> it is used to store data but the data will not exist if the browser is closed. so the data is stored until the tab is opened

// cookies --> it is also used to store data but used to store a small amount of data approx 4kb 






// localStorage -->
    //  store (setItem) , fetch (getItem) , remove (removeItem) and update (setItem) , clear (used to clear all data of localstorage) data 

// **** we cannot store array , object in localstorage but we store it using string but when we get the data so hame string ke form me data milta hai, to string se use apne natural form me lane ke liye hum use json.parse kr dete hai to array apne natural form me aa jata hai ****

// to store or set the data to the browser we use localStorage.setItem() to store data

localStorage.setItem("name" , "sohel");


// to fetch or get the from the localStorage we user localStorage.getItem()

let val = localStorage.getItem("name")
console.log(val);


// to remove the data we use localStorage.removeItem() so the given val will be removed


// to update the data we still use localStorag.setItem() so the value is update but if the value is already present from before so it will override the value...







// sessionStorage -->
    //  in sessionStorage we store , update , remove or fetch same as the localStorage but the data is not present after the tab was closed...





// cookies -->
   // used to store ~4kb data where localStorage and sessionStorage is used to store ~5mb data...
   // it will also  stay after the browser is closed

   document.cookie = "name = sohel"    // structure of making cookie   (use editThisCookie extension to see the stored cookie)







// *** locastorage me array ke form me data store karna ==>

    localStorage.setItem("Footballer" , JSON.stringify(["Messi" , "Neymar" , "Salah"]));
    let friend = JSON.parse(localStorage.getItem("Footballer"))
    console.log(friend)      // Now we got the array form...

    