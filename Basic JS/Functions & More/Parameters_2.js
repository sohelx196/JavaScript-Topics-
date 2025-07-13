// Parameter & Arguments

//Parameter
function add(n1, n2) {
  console.log(n1 + n2);
}

add(1, 2);
//Arguments



// Default parameter --> when we dont pass the argument so it becomes undefined so we will give the default values to the parameter(variable);

function withoutDefaultPara(n1 , n2){
    console.log(n1+n2);
}                 
withoutDefaultPara();   // the output is NaN b/C we are trying to add undefined values...

function withDefaultPara(a1=0,a2=0){
    console.log(a1+a2);
}
withDefaultPara();     // Now it show 0 when we does not pass any args...




// *********** Important ************
//  Rest and Spread Parameter (Operator)

// bohot sare argument ho to hamne utne he parameter banane pdte hai, isse bachne ke liye hum rest(...) operator/parameter ka use karte hai

//**** Both rest and spread are same thing but jb (...) function ke parameter me lge to wo rest hai.
// Aur jb (...) arrays and objects pr lge to vo spread operator hoga.


// Rest Parameter (cause we are using it in functions) example -->
function restPara(...values){
  console.log(values)
}
restPara(1,12,312,212,12,32,242,232,2,2)

