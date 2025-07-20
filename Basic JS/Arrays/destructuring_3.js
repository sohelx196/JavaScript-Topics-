//  destructuring in spread operator =>

  // Normal desturing =>
     let arr = [1,2,4,5,6,7,8]; 
     let arr2 = arr;        // using this, it will copy the whole array and changing in arr will also change into arr2 ( reference aata hai copy nahi)
  

// so destructuring using spread operator can fix it -->
   let newArr = [2,3,4,5,6,7,8,9,10];
   let copiedArr = [...newArr];    // this will not take reference instead make a copy..
   newArr.push(10);

   let secondArr = [32,34,43,53,23,12,12,32];
   let copiedArrr = [...secondArr];
   console.log(copied)



   