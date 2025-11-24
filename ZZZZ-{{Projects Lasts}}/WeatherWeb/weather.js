let place = document.querySelector('#city-name');
let temperature = document.querySelector("#temperature");
let description = document.querySelector("#description");
let weatherImage = document.querySelector("#weatherImage");
let errorMsg = document.querySelector("#errorMsg");
let btn = document.querySelector("button");



//* Unstructured Code (old) */

// async function Weather(city) {
    
//     let api = "056c320458764b7ebaa42418252411"
//     let apiKey = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`;
        
//     try{
//         let response = await fetch(apiKey);
//         let data = await response.json();
//         console.log(data)

//         place.textContent = data.location.name;
//         temperature.textContent = `${data.current.temp_c}°C`;
//         description.textContent = data.current.condition.text;
//         weatherImage.src = data.current.condition.icon;
//         weatherImage.classList.add('show');         

//     }   
//     catch(error){
//         errorMsg.textContent = "Not valid city";  
//     }

// }

// document.querySelector("button").addEventListener("click" , function(){
//    let value  = document.querySelector("input").value;
//    Weather(value)

//    document.querySelector("#funny").textContent = "Mousam to aisa ho rha hai dil garden garden ho rha hai!!"
// })



async function getWeather(city){
     let api = "056c320458764b7ebaa42418252411"
     let apiKey = `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`;
     
     try{
         let response = await fetch(apiKey);
         let data = await response.json();
         return {data};
     }
     catch(error){
        errorMsg.textContent = "Not valid city";  
     }
}

function UpdateWeather(data){
        console.log(data);
        place.textContent = data.location.name;
        temperature.textContent = `${data.current.temp_c}°C`;
        description.textContent = data.current.condition.text;
        weatherImage.src = data.current.condition.icon;
        weatherImage.classList.add('show');
}

function handleClick(){
    btn.addEventListener("click"  , async function(){
          let value  = document.querySelector("input").value;
          let {data} = await getWeather(value);
          UpdateWeather(data);
          document.querySelector("#funny").textContent = "Mousam to aisa ho rha hai dil garden garden ho rha hai!!"
    });
}

handleClick();