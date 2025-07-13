// Temporal Dead Zone --> (TDZ)


// The time from the start of the block to the line where the variable is declared is called the Temporal Dead Zone (TDZ).

{
    // TDZ Starts here
    console.log(a)  /*reference error shows*/
    
    let a = 20;
    // TDZ end here
    console.log(a)  /*here 20 will be shown*/

    // It shows an Reference Error (let & const)
}



// ::Note::
// There is no TDZ in VAR but in LET & CONST there is TDZ...

