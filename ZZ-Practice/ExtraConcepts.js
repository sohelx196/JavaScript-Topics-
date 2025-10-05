// nested destructuring in js


// const myDetail = {

//     personal : {
//         name : "messi",
//         surname : "lio",
//     },

//     cups : [1993 , 1999 , 2022 , 2026],

// }


// const  {personal:{...allDetails} , cups:[...allCups]} = myDetail;


// console.log(allDetails)
// console.log(allCups)


// Optional Chaining & Nullish Coalescing
 
// user?.profile?.name   (Optional Chaining)

const user = {
    username : "john",
    marks : {
        maths : 20 , 
        science : 30 , 
        hindi : 40 
    }
}


console.log(user.marks)
console.log(user.marks.it.marks);  // error shown
console.log(user.marks.it?.marks);  // now cause of optional chaining the error not shown



// value ?? "default"  (nullish coalscing)
// it check if there there is null or undefined so it run the default value which we provide after ??

let marks;
let total = marks ?? 0;
console.log(total);   // 0 is the answer..cause marks is undefined


