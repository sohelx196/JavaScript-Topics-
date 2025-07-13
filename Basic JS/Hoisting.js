// Hoisting -->

// When we make a variable , so it will break into two parts which is decalred and initialization part..so the decalred parts goes to the top of the programme and the initialization parts remain to the bottom...


// var num = 20; variable is divided into two parts which is 
 
var num = undefined;

console.log(num)  /* thats why it shows undefined */
// 
// 
// Temporal Dead Zone 
// 
// 
var num = 20;




// Hoisting in var , let & const -->

    // var --> hoist --> undefined (value)
    // let --> hoist --> No value (referenceError)
    // const --> hoist --> No value (referenceError)


// Important Nots :: let & const me temporal dead zone hone ki wajah se undefined na aake referenceError aata hai..kyuki jab hum declaration se pehle access karne ka try karte hai to tdz ki wajah se referenceError milta hai...

// Example -->

// let num = undefined;

// console.log(num)

// // TDZ created hence showing referenceError instead undefined

// num = 10



function testingVar(){

    // Changing const variable value or updating its value using objects
    const name = {
        goatName:"Null",
        profession:"Footballer",
        nickname:"null"
    }

    name.goatName = "NotNULL"
    console.log(name)
}

testingVar()



