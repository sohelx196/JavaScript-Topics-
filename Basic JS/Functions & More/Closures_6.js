// ******** Important ********

// Closures and lexical scoping -->

 // Closures => Function jo ki return kar raha hai koi dursa function, to return hone wala function always use  krega parent function ka koi variable..

   // (In english : A function which is returning an another function , so the returned function always use a variable of parent function , and this whole is function is known as closures)

    function closureFunction(){              //
       let parentVar = 29;                   //
        return function(){                   //  This is 
           console.log(parentVar);           //  closures...
        }                                    //
    }                                        //


  // Lexical Scoping => lexical scoping means har function me variable , apne block ke ander kahi pr bhi access kiya ja skta hai..
 

   function lexical1(){
    let a = 10;               //                  
                              //
    function lexical2(){      //                    //
        let b = 20;           //                    //  b is accesable only here
    }                         //  a is accesable    // 
                              //  to whole block
    function lexical3(){      //                    //  
        let c = 30;           //                    // c is accesable only here
    }                         //                    //          
   }

   function closureChecking(){
       let closurAccess = "accessClosure";
       return function(){
         console.log()
       }
   }


   

// use case of closure ->
     // 1) for private var -->

     // Normally function ke variables delete ho jaate hain after execution.

     // Closure me, agar inner function unhe use karta hai, to wo lexical environment memory me preserve hota hai.

     // Ye preserved variables sirf closure ke through hi accessible hote hain → isiliye wo private lagte hain.


    //  2) Enapsulation -->
          
          // Encapsulation = data ko wrap karke protect karna, taki wo directly bahar se access na ho sake, sirf specific functions (methods) ke through hi access/change ho.

          // Java / C++ jaise OOP languages me hum private keyword use karte hain.

          // JavaScript me closures ye kaam kar dete hain.


          // how it is works -->
          
              //  Closures ek private scope banate hain jo outer function ke andar hota hai.

              //  Bahar se direct variable access nahi hota, lekin hum getter/setter functions return karke controlled access dete hain.