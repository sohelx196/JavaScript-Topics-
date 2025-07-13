//  Pure and Impure Functions -->

   // Pure Function --> 
   // Aise functions jo bahar ki values ko na badle...(Function which do not affect the outside values are known as Pure Functions)
       
      let a = 10;
      function pureFunction(){
        console.log(a);      //Here this function is not affecting the a value..
      }


   // ImPure Function --> 
   // Aise functions jo bahar ki values ko badal de...(Function which  affect the outside values are known as ImPure Functions)
      
      let b = 10;
      function imPure(){
        console.log(++b);      // here the outside values are changing (10->11)
      } 
     imPure()