//  forEach , map , filter , reduce  these all method are accept a function as a parameter.


// forEach --> 
// forEach does not give a new array , it just go through the element and perform the given operation...

// *** In all these four methods , the function accept two parameter which is actual var and the index (which is the index of the array elements)...***
// Example -->
let foreachArr = [2,3,4,5,6,7];
let finalArr = foreachArr.forEach((val) => {
   console.log(val*2)
})



// Map Method -->
// it is used to create a new array using the old array values (map tab use karna hai jab hame new array banana hai pichle array ke data basis prr)

// *** map dikhte he mind me ek blank array bana lo and jo bhi map return hoga vo blank array me chale jayga..

// To check -- first run matrix so the value is  [3,2,4]  but if you run newMarix the output will be changed because it make a new array
let matrix = [3,2,4];
 let newMatrix = matrix.map((newVal) =>{
   return newVal *   3;
});

console.log(newMatrix); 




// Filter array filter the data of array and store it in another array
// filter method array ko given condition pr filter krke new array me daal dega..
 let values = [32,23,53,463,100];

 let evenVal = values.filter((numVal) => {
    return numVal%2 == 0;
 });

 console.log("The even values are :" ,evenVal);





// Reduce method  // so it combine and give a single value
// meaning that it will reduce the actural array and make it in a single value.. 
let reduceMethod = [2,3,4,6,7,3,2];
let finalReduce = reduceMethod.reduce((previousVal , currentVal)=>{
   return previousVal + currentVal;
},0)   // here 0 is the previousVal initial value

console.log("The reduce result are" , finalReduce);




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



// find method --> 
// .find() returns the first value in the array that satisfies a condition.

// If no value matches, it returns undefined.

// It does not return all matches — only the first one.

let findMethod = [20,23,34,40,45,50];
let finalFind = findMethod.find((findVal)=>{
   return findVal > 20;
})
console.log(finalFind);   //here it only give 23 (which is the first value)




// some method --> some will give the true or false base on the given condition..
let marks = [23,35,45,60,75,90];
let finalMark = marks.some((stuMark)=>{
   return stuMark > 70;
})
console.log(finalMark)    // it will gives true



//  every method --> this method will check if the conditions is match to all the value then it will gives you the true else it will give false...

let everyMethod = [10,24,35,40,50];
let finalEvery = everyMethod.every((everyVal)=>{
   return everyVal > 10;
});
console.log(finalEvery)   //it will show false b/c the 10 is left the array by the condition...


