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




// Copying Object using Spread Operator (Unpack element)
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
    
    
    


// Looping : for-in , Obeject.keys , Object.entries 

// looping the object through for-in -->
let myObj = {
    FriendName : "Rohan Pawar",
    Collage : "sdits",
    Mobile : "9131440488",
    Address : {
        city : "khandwa"
    }
}

for(let key in myObj){
    console.log(key , ":" , myObj[key])
}


//  Obeject.keys --> 
// when we want to make the keys of the object in the array..so we use Object.keys
console.log(Object.keys(myObj))   // this will wrap the keys into arrays...


// Object.entries -->
// make the array of arrays...
console.log(Object.entries(myObj))




// Deep clone of objects ==>
// A deep clone creates a completely new object with copied values of all nested objects, meaning changes in the cloned object do not affect the original.

//  1. Using structuredClone(); ==>
let newCopy = structuredClone(myObj);
console.log(myObj.Address.city = "Indore");


//  2. Using JSON methods ==>
const original = {
    name: "Sohel",
    details: {
    age: 21,
    gender : "male"
  }
};

let anotherCopy = JSON.parse(JSON.stringify(original));




// Optional Chaining ==>
    //  Optional chaining (?.) allows us to safely access deeply nested properties of an object without causing an error if any part is null or undefined.
    
const user = {
  name: "Messi",
  addressd: {
    city: "Mars"
  }
};
console.log(user?.address);     // not gives error cause we do optional chaining(?.)
console.log(user?.address);     // not gives error cause we do optional chaining(?.)




