 
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


//Access object using Rest Operator (Pack element)
