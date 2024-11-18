//  Api --> Application Programming Interface
//  Api based on request and response cycle cause we request a data from server and api give us response or give us data

// We use fetch() method to fetch data...

const apiUrl = "https://cat-fact.herokuapp.com/facts";

let catFacts = document.querySelector("#catFact");
let catBtn = document.querySelector("#mybut");

const getCatData = async () => {
  let response = await fetch(apiUrl);
  console.log(response); //It returns JSON format data and it is not understandable so we convert it into js object by using json() method
  let result = await response.json();
  catFacts.innerText = result[4].text;
};

catBtn.addEventListener("click", getCatData);

// Now Explore about HTTP-Verbs on mdn and also explore about Post Request on Mdn...(Have a Good Luck)
