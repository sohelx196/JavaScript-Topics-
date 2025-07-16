// Array holds many elements with different data type..
 // In Array , each element has a index which is starts from 0..

let newStrArr = ["sohel" , "faijan" , "aaise" , "tosif" , "aaftab"];
for(let i=0;i<newStrArr.length;i++){
    console.log(newStrArr);
}





// Array methods

// 1. push method -- add items in last of the orignal array
let foodItems = ["banana" , "pizza" , "karela"];
foodItems.push("baigan","chicken");
console.log(foodItems);


// 2. Pop method -- delete item from last of the array and return it

let cities = ["khandwa" , "Indore" , "Mumbai"];
console.log(cities);
let deletedItem = cities.pop();
console.log(cities);
console.log(deletedItem); //checked which element was deleted


// 3. toString method -- convert the array into an string

let games = ["Free Fire" , "PUBG" , "COD"];
let changedVal = games.toString(); //array changed to a string
console.log(changedVal); 


// 4. concat method -- combine two or more array in a single array
// It doesn't change the orignal array
let mpCities = ["Indore" , "Khandwa" , "Burhanpur"];
let mhCities = ["Mumbai","Akola","Pune"];
let indiaCities = mpCities.concat(mhCities); 
console.log(indiaCities); 



// 5. Slice Method -- This method gives you the element of given values or condition
// Remember that the indexing will not include the last indexing
// slice method not change in orignal array
let names = ["India" , "Saudi" , "Palestine" , "Russia"];
let res = names.slice(1,3);

console.log(res);



// 6. Splice Method -- is used to delete , add or replace an element
// It change in orignl array

let myNum = [3,4,5,6,7,8,9];
let edited = myNum.splice(1,2,29);
 // (index from change,how many index want to chnge , which num want to replace)
 console.log(myNum);
 

// sort --> sort method will take a function and then return according to we want accending order or decending order...
let sortArr = [23,42,43,2,3,4];
let finalSort = sortArr.sort(function(a,b){
    return b-a;         // If you run finalSort so you will get descending order..
})





// Some other methods -->
// * Shift method delete a single array element from start
// * unshift method add a single array element from start


