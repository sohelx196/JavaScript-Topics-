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