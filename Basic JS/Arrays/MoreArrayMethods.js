//  forEach , map , filter , reduce  these all method are accept a function as a parameter.


// forEach --> 

// forEach does not give a new array , it just go through the element and perform the given operation...

// *** In all these four methods , the function accept two parameter which is actual var and the index (which is the index of the array elements)...***

let foreachArr = [2,3,4,5,6,7];
let finalArr = foreachArr.forEach((val) => {
   console.log(val*2)
})




// Map Method -->
// it is used to create a new array

//  using the old array values
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
console.log(outputNew); // It print a single value -7 

