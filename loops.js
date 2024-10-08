// For Loop
  //   for(let i = 1; i<=5; i++) {
  //   //  Initilize ; stopping ; increment;
  //     console.log(i); 
  // }



  // While looP

  let i = 1;
  //initialize 
  while(i<=6){
    // stopping
    console.log("i = " , i);
    i++;
    // increment or updating
  }


  // do-while Loop 
  let j = 10;
  do{
    console.log("This is do-while Loop which runs the condition atleast one time");
    j++;
  }while(j<=12);


// for-of Loop

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
  console.log("Key " , j , "value " , student[j]);
}



