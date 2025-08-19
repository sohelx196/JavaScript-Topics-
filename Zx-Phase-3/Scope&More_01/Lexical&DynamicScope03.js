
// Lexical Scoping => lexical scoping means har function me variable , apne block ke ander kahi pr bhi access kiya ja skta hai..
// (lexical means physically)

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


  // ** In js we follow only lexical scoping...


// Dynamic Scoping -->
    // JavaScript does NOT have true dynamic scope.



    

