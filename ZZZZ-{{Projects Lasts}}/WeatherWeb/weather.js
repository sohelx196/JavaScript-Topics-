
let place = document.querySelector('#city-name');
let temperature = document.querySelector("#temperature");
let description = document.querySelector("#description");
let weatherImage = document.querySelector("#weatherImage");
let errorMsg = document.querySelector("#errorMsg");
let btn = document.querySelector("button");
let suggestionsList = document.querySelector("#suggestions");
let cityInput = document.querySelector("#city-input");

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

async function fetchCities(query) {
    if (!query) {
        suggestionsList.style.display = 'none';
        return;
    }
    let api = "056c320458764b7ebaa42418252411";
    let url = `https://api.weatherapi.com/v1/search.json?key=${api}&q=${query}`;
    
    try {
        let response = await fetch(url);
        let cities = await response.json();
        showSuggestions(cities);
    }
    catch (error) {
        console.error("Error fetching cities:", error);
    }
}

function showSuggestions(cities) {
    suggestionsList.innerHTML = '';
    if (cities.length === 0) {
        suggestionsList.style.display = 'none';
        return;
    }
    
    cities.forEach(city => {
        let li = document.createElement('li');
        li.textContent = `${city.name}, ${city.region}, ${city.country}`;
        li.addEventListener('click', () => {
            cityInput.value = city.name;
            suggestionsList.style.display = 'none';

            getWeather(city.name).then(({data}) => {
                 UpdateWeather(data);
                 document.querySelector("#funny").textContent = "Mousam to aisa ho rha hai dil garden garden ho rha hai!!"
            });
        });
        suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = 'block';
}

function handleDebouncing(func, delay) {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

const debouncedFetchCities = handleDebouncing((query) => fetchCities(query), 500);

cityInput.addEventListener('input', (e) => {
    debouncedFetchCities(e.target.value);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== cityInput && e.target !== suggestionsList) {
        suggestionsList.style.display = 'none';
    }
});

function handleClick(){
    btn.addEventListener("click"  , async function(){
          let value  = document.querySelector("input").value;
          let {data} = await getWeather(value);
          UpdateWeather(data);
          document.querySelector("#funny").textContent = "Mousam to aisa ho rha hai dil garden garden ho rha hai!!"
    });
}

handleDebouncing(function(){
     handleClick(userInput.value);
     
})

handleClick();