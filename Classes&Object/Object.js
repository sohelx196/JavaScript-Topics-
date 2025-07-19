//  Objects -->  objects is a key value pair in which a key holds a value...
// When you need to want info about one entity so you will use objects..



 let student = {
     studentName : "Sohel Sheikh",
     studentAddress : "Khandwa",
     studentBranch : "Data Science",
     phone : "9121131342",
     collage : "SDITS KHANDWA",
    }
    
//  Obejct access using dot operator
let dot = student.studentBranch;
console.log(dot);
let id = student.studentId = "29"; //We can also add the value in object
console.log(id);


//  Obejct access using Big Bracket
let bigBracket = student["studentName"];
console.log(bigBracket);
student["studentAadhar"] = "965882829203"; //We can also add the value in object
console.log(student);




// Access of Object using Spread Operator (Unpack element)
let obj = {
    name : "Tiger",
    class : 10,
    subject : "Data Science"
}
let obj2 = {
    ...obj,   //We can access the whole object using spread operator
    section : "A"
}
console.log(obj2)

// We can also use it to merge arrays
const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8];
console.log(...arr1 , ...arr2);



// Object destructuring means breaking the the actual part into small parts
// Object destructuring =>
     let food = {
         foodName : "dal chalwal",
         days : 22,
         rating : 10,
         dayName : {
            monday : false,
            tuesday : true,
            wednesday : true,
            thursday : true
         }
    };
    let {monday,tuesday} = food.dayName;
    console.log(monday)
    



