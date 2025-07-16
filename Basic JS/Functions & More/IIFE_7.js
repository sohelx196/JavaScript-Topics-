// IIFE ( Immediately Invoked Function Expression ) -->
// It's a function expression wrapped in () and then invoked immediately with ()
   // We can create private and secrate variable using IIFE..
 
(function checking(){
    console.log("This is a iife function...")
})();




// hoisting difference b/w declaration and expression -->

hoistingInDeclaration()

function hoistingInDeclaration(){
    console.log("hositing in function declaration happens")
}



hoistingInExpression()

let hoistingInExpression = function(){
    console.log("hoisting in function expression is not works..")
}


