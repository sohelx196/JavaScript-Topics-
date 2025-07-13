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


   