// Repeat karne ko loop kehte hai...and there are too many ways to repeat some of them are given below..
// for , while , do-while , for-of , for-in , forEac h ,  etc...


// For Loop -->
   // kaha se jana hai -> kaha tak jana hai -> kaise jana hai

  //  for(let i = 1; i<101; i++){
  //   console.log(i);
  //  }

  //   for(let i = 1; i<=5; i++ ) {
  //   //  Initilize ; stopping ; increment;
  //     console.log(i); 
  // }




  // While looP -->
    //  kaha se jana hai -> kb rukna hai -> kaise jana hai
    
    // structure- 
      //  start
      //  while(end){
      //   // code
      //   increment or change
      //  }


  let i = 1;
  //initialize 
  while(i<=6){
    // stopping
    console.log("i = " , i);
    i++;
    // increment or updating
  }




  // do-while Loop-->

  let j = 10;
  do{
    console.log("This is do-while Loop which runs the condition atleast one time");
    j++;
  }while(j<=12);






// for-of Loop  (applied on arrays)

let specialLoop = "apnaCollage";
let length = 0;
for(let i of specialLoop){
  console.log(i);
}






// for-in Loop  which is applied on object and arrays
// key:value,

let student = {
    userName : "Sohel Sheikh",
    age : 20,
    marks : 70,
    nationality : "Indian"
};

for(let j in student){
  console.log(student[j]);
}



// Break and Continue--> 
  // Break will stop the loop to the specific given condition..
  // Continue will skip the loop for the given condition...


  

// practice question of loops ---->>>>

// print even numbers to 20;
// for(let i = 1; i<21 ; i++){
//   if(i%2 === 0){
//     console.log(i)
//   }
// }


//  print odd number from 1 to 15 using while loop;
// let x = 1;
// while(x<16){
//   if(x%2!=0){
//     console.log(x);
//   }
//   x++;
// }


// Print any table with the full pattern..

// for(let i = 1 ; i < 11 ; i++){
//   console.log(`15 * ${i} = ${15*i}`)
// }


//  Add numbers from 1 to 100 

// let sum = 0;
// for(let i = 1;i<101;i++){
//   sum = sum + i ;
// }
// console.log(sum)


// Print all number b/w 1 to 50 which is divisible by 3

// for(let i = 1; i<51; i++){
//   if(i%3===0){
//     console.log(i)
//   }
// }


// Take input and show that that those number is even or odd...

// let userNum = prompt("Enter Your Number:");

// for(let i = 1; i <= userNum; i++){
//   if(i%2==0){
//     console.log(`${i} is even`)
//   } else{
//     console.log(`${i} is odd`)
//   }
// }


// How many numbers b/w 1 to 100 are divisible by both 3 and 5

// for(let i=1;i<101;i++){
//   if(i%3==0 && i%5==0){
//     console.log(i)
//   }
// }
