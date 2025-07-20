// Computed Properties ==>
    // Computed property means using a variable as a key name in an object.
    //  This is called computed property because the key is computed (calculated) from a variable.
 

// Normally =>
  let normal = {
    goatName : "Messi"
  }


// Computed Properties =>  (Properties are dynamically) 
let profession = "Football";
let footballerName = "Messi The Goat";
 
let footballer = {                      
    [profession] : footballerName
}




// Demo Example ==>
let Name = "Student Name";
let NameVal = prompt("Enter Your Name");

let Address = "Student Address";
let AddressVal = prompt("Enter Address");

let Email = "Student Email";
let emailVal = prompt("Enter Email");



let studentDetails = {
    [Name] : NameVal,
    [Address] : AddressVal,
    [Email]  : emailVal,     
}
console.log(studentDetails)