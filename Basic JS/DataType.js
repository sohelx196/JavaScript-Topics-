// There are two type of data type in js -->
 
   // Primitive and Reference Data Type -->
      // Primitive --> Primitive data are those which we cannot write it into brackets or we can say that it can be copied directly
              // string , number ,null , undefined, symbol , bigInt  etc 

      // Reference --> Reference data type are those which we can write it into brackets or we can say that it cannot be copied directly (we can copy it using spread operator)
             // Arrays, objects and functions etc




// Null --> null means ki aapko pata hai ki koi variable ki value baad me aygi to use null de dete hai
// undefined --> undefiened means aapne jb ek variable banaya aur usse koi value nhi di to by default use js ki taraf se undefined value milegi

// Examples -->
let userMobile = null
console.log(userMobile)   /* output = null */

let userName;
console.log(userName)    /* output = undefined */


// bigint -->
   // when we create a large number (check it on console (Number.max_safe_number)) so after that number we can't increase it so we use bigint

let bigInt = 9007199254740991n;
// so adding n to the last it becomes bigint




// Dynamic Typing -->
   // Dynamic typing means ki aap runtime pr data type change kar skte ho variable ka...

   let a = 29;
   a ="sohel"
   a = true
   a = null
// and so on....


