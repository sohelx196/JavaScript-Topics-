// Function is a block of code which perform a particular task

function myName(){
    let name1 = "Sohel";
    let name2 = "Sheikh";
    console.log(name1+name2);
}
myName();


// Arrow Function => is a compact way of writing any function
// We take an arrow function in a variable

                //  passed parameter
let arrowMulti = (num1 , num2) => {
    console.log(num1 * num2);
}

arrowMulti(2 ,2);
    // passed argument




 // The below is call back function BC a function is passed in another function
// Here for-each loop is only used for array not for strings
// We can access the array data by passing these values -- arr,idx,val

let matrix = ["Sohel" , "Aaise" , "Faijan"];
// matrix.forEach((idx) => {
//      console.log(idx);
// });



// Another way of passing callback function
let anotherWay = (num) => {
    console.log(num);
}           
matrix.forEach(anotherWay);