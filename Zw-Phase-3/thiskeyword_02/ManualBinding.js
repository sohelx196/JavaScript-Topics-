//  Manual Binding =>  call , apply , bind

// function ko call krte waqt aap set kr sakte ho ki this ki value kya hogi..

// Normally, this in JavaScript depends on how a function is called. Sometimes we need to force a function to use a particular this. That’s where call, apply, and bind come in.


// call -->

    //  ydi hum chahte hai ki this se obj call ho jaye , to uske liye hum function ko call krke uske aage .call likh kar jo bhi obj pass kroge to this ki value wahi ho jaygi...


let obj = {
    name : "messi"
}

function fnc(a,b,c){
   console.log(this , a,b,c)
}

fnc()  // normal window object because this ki value function me window obj hoti hai

fnc.call(obj)  // yaha pass kiya hua obj milega..




//  apply --> 
   // ydi aap ek se jyada arguments pass kr rhe ho to apply kehta hai ki aap pehla arg obj pass kroge aur doosra arg array ke ander pass kroge...

fnc.apply(obj,[1,2,3])


// bind -->
  // isme bhi hum arg pass krte hai call ki tarah pr yeh direct output nhi dega instead yeh ek naya function deta hai aur uss naye function ko chalane pr hame object milta hai jo pass obj pass kiya tha...


  fnc.bind(obj,1,2,3)  // no output

  let newFnc = fnc.bind(obj,1,2,3)
  newFnc()  // ab yeh obj as a output dega...