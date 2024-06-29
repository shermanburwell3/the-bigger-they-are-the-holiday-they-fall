// API Key and country object

const apiKey = '0c1d7915ad2662f0e450b432130b6989';
const countryObject = JSON.parse(localStorage.getItem('country'));

// Declare arrays for lat and lon glabally
const lat = [];
const lon = [];

date = localStorage.getItem('weatherDate');

// Check if country is United States
if (countryObject.countryCode == 'US') {

    // If it is, run a query with state code to get lat and lon

    for (let i = 0; i < countryObject.cities.length; i++) {

        let cityName = countryObject.cities[i];
        let stateCode = countryObject.states[i];
        const countryCode = countryObject.countryCode;

        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`)
            .then(function (response) {
                return response.json()
            })
                .then(function (data) {
                    // Assign global lat and lon the first lat and lon result of each search
                    lat.push(data[0].lat);
                    lon.push(data[0].lon);
                    // Pass our current index into getWeather function to use on the lat and lon arrays later
                    getWeather(i)
                })
    }
}

else if (countryObject.countryCode != 'US') {

    // If it is NOT, run the query without a state code

    for (let i = 0; i < countryObject.cities.length; i++) {

        let cityName = countryObject.cities[i];
        const countryCode = countryObject.countryCode;

        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${apiKey}`)
            .then(function (response) {
                return response.json()
            })
                .then(function (data) {
                    // Assign global lat and lon the first lat and lon result of each search
                    lat.push(data[0].lat);
                    lon.push(data[0].lon);
                    // Pass our current index into getWeather function to use on the lat and lon arrays later
                    getWeather(i);
                })
    }
}

// Get weather data using lat and lon
function getWeather(index) {
    
    fetch(`https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat[index]}&lon=${lon[index]}&date=${date}&units=imperial&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })
            .then(function(data) {

                createCards(data, countryObject.cities[index]);
                
            });
}

// Generate one card per city and append it to an element
function createCards(weatherData, city){

    // Get handle on the widget

    const weatherDisplayEl = document.querySelector('#weatherForecastDisplay');

    // Create elements to add to widget

    const weatherCard = document.createElement('div');
    const cityEl = document.createElement('h3');
    const highTemperatureEl = document.createElement('p');
    const lowTemperatureEl = document.createElement('p');
    const maxWindEl = document.createElement('p');

    // Assign data into the elements

    cityEl.textContent = city;

    highTemperatureEl.textContent =`High Temp: ${Math.round(weatherData.temperature.max)} F`
    lowTemperatureEl.textContent = `Low Temp: ${Math.round(weatherData.temperature.min)} F`


    maxWindEl.textContent = `Max Wind Speed: ${Math.round(weatherData.wind.max.speed)} MPH`;

    // Finally, append the cards to the widget

    weatherCard.append(cityEl);
    weatherCard.append(highTemperatureEl);
    weatherCard.append(lowTemperatureEl);
    weatherCard.append(maxWindEl);

    weatherDisplayEl.append(weatherCard);
   


}







