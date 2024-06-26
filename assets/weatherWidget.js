const apiKey = '0c1d7915ad2662f0e450b432130b6989';
const countryObject = JSON.parse(localStorage.getItem('country'));
const countryCode = countryObject.countryCode;

// const weatherQuery = `https://api.openweathermap.org/data/3.0/onecall/day_summary?&appid=${apiKey}`;
// const geoQuery = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`;


lat = 30;
lon = -97

date = '2025-12-10' //Placeholder until we can get the date from the holiday api
// All of the following may be inside of a for loop in order to run the code three times on page load
if (countryObject.countryCode == 'US') {

    for (let i = 0; i < countryObject.cities.length; i++) {

        let cityName = countryObject.cities[i];
        let stateCode = countryObject.states[i];
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=${apiKey}`)
            .then(function (response) {
                return response.json()
            })
    }
}

fetch(`https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=${date}&appid=${apiKey}`)
    .then(function(response) {
        return response.json();
    })
        .then(function(data) {
            console.log(data);
            
        });

// Check if country is United States
// If it is, run a query with state code to get lat and lon

// Get lat and lon and pass it into the query with a placeholder date.

// Generate one card per city and append it to an element on the page.
