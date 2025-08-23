//  Api --> Application Programming Interface
//  Api based on request and response cycle cause we request a data from server and api give us response or give us data



// We use fetch() method to fetch data...

const apiUrl = "https://official-joke-api.appspot.com/random_joke";

let catFacts = document.querySelector("#catFact");
let catBtn = document.querySelector("#mybut");

const getCatData = async () => {
  let response = await fetch(apiUrl);
  console.log(response); //It returns JSON format data and it is not understandable so we convert it into js object by using json() method
  let result = await response.json();
  catFacts.innerText = result[4].text;
};

catBtn.addEventListener("click", getCatData);

// Now Explore about HTTP-Verbs on mdn and also explore about Post Request on Mdn...

// ***Apna collage code end*****




//  ****Sheriyans code starts******
 
// http and fetch api
   
  //  HTTP(hyperText transfer protocol) = rules for communication between browser ↔ server.
  //  Fetch API = JavaScript tool to make HTTP requests. fetch is a method to for getting or setting data from another source...(its a inbuilt function)

  // *** fetch promise based hai..to isko use krne ke 2 tarike hai...
  // (.then & catch) 
  // (async & await) modern way



  // simple words me api , url hote hai jis pr jane pr kuch data milta hai..data humne JSON (Javascript object notation) format me milta hai..


// ***** when we fetch data so it give us unreadable data in the form of stream..so we always convert those data into JSON format ******
    



// More concepts -->> chatgpt it for learning (all are related to backend)

  // Get , Post , Headers , status code 

  // Json parsing -> which we discussed about that we parse the raw data into json redable format.

  // form submission via fetch..

  // error handling with response.ok and try catch 

  // basic REST principle

  // **** (Almost all are related to backend) *****




 


  