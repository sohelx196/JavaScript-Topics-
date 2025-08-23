// object oriented javascript or programming..

     // used for reusability of code and many more

     // oops me hum ek baar object ka blueprint bna dete hai ki vo kesa dikhega phir hum naye naye objects with differents value ke saath bna skte hai..


// function whom we run using new keyword are called constructor function , and the contructor have a first capital latter always...
     function CreateCars(name,color,speed){

        this.name = name ;
        this.color = color ;
        this.speed = speed ; 
    
     } 

     //prototype created
     CreateCars.prototype.showroomName = "RB Motors";  // now the showroonName is added to all.

     // jb hum function ko new se chalate hai to new ka mtlb hai blank object... 
     let car1 = new CreateCars("BMW" , "BLACK" , 300);
     let car2 = new CreateCars("Audi" , "WHITE" , 400);





// prototypes => In JavaScript, every object has a hidden property called [[Prototype]]..(also known as hidden memory)

     // ydi kisi bhi object me koi value same rhne wali hai to hum use hardcoded na bana ke uska prototype bna dete hai...esa isliye krte hai kyuki ydi hum hardcoded likh denge to woh hr function call pr nayi space legi..


     // in other words...agr tumhara constructor function , koi field apne prototype pr attach krle to us constructor se banne wale sbhi new instance yani ki objects ke pass wo field automatically chali jati hai..