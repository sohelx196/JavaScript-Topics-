// forEach is also an array method


// Map Method
// it is used to create a new array using the old array values
// To check -- first run matrix so the value is  [3,2,4]  but if you run newMarix the output will be changed because it make a new array
let matrix = [3,2,4];
 let newMatrix = matrix.map((newVal) =>{
   return newVal * 3;
});

console.log(newMatrix); 




// Filter array filter the data of array and store it in another array
 let values = [32,23,53,463,100];

 let evenVal = values.filter((numVal) => {
    return numVal%2 == 0;
 });

 console.log("The even values are :" ,evenVal);




// Reduce method  // so it combine and give a single value
let myArr = [3,4,5,6,];
let newArr = myArr.reduce((previousVal,currentVal) => {
   return previousVal * currentVal;
});

console.log(newArr);



// Here in this example it filter out the element based on the the given condition
let starArr = [32,23,23,38];
let newOut = starArr.filter((val) => {
   return val > 30;
});

console.log(newOut);



// Here a reduce method give a single value by performing operation given in condition
let reduceArr = [3,3,3,3,1];

 let outputNew = reduceArr.reduce((pre , curr) => {
  return pre - curr;
});
console.log(outputNew); //It print a single value -7

