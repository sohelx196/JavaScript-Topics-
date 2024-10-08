// // Printing Even Number 
// for (let i = 0; i <= 100; i++) {
//   if(i%2==0){
//     console.log(i);     
//   }
// }


// Filters
let marks = [23,32,94,35,92];
let student = marks.filter((val) => {
  return val > 90;
});
console.log("The toppers student marks :" , student);


// Array practice

let userInput = prompt("Enter Your Number :");
 let arr = [];
 for(let i=1;i<=userInput;i++){
    arr[i-1] = i;
 };
 console.log(arr);



