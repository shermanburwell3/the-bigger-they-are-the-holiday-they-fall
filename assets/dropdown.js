const months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];




const countryObjects = [{countryName: 'France', countryCode: 'FR', cities: ['Paris', 'Lyon', 'Bordeaux']},
    {countryName: 'Spain', countryCode: 'ES', cities: ['Madrid', 'Barcelona', 'Seville']},
    {countryName: 'United States', countryCode: 'US', cities: ['New York City', 'Miami', 'Los Angeles'], states: ['NY', 'FL', 'CA']},
    {countryName: 'Turkey', countryCode: 'TR', cities: ['Istanbul', 'Antalya', 'Izmir']},
    {countryName: 'Italy', countryCode: 'IT', cities: ['Rome', 'Florence', 'Venice']},
    {countryName: 'Mexico', countryCode: 'MX', cities: ['Mexico City', 'Cancun', 'Oaxaca']},
    {countryName: 'United Kingdom', countryCode: 'GB', cities: ['London', 'Edinburgh', 'Manchester']},
    {countryName: 'Germany', countryCode: 'DE', cities: ['Berlin', 'Munich', 'Hamburg']},
    {countryName: 'Greece', countryCode: 'GR', cities: ['Athens', 'Thessaloniki', 'Chania']},
    {countryName: 'Austria', countryCode: 'AT', cities: ['Vienna', 'Salzburg', 'Innsbruck']},
    {countryName: 'Japan', countryCode: 'JP', cities: ['Tokyo', 'Kyoto', 'Osaka']}
];

console.log(countryObjects);

const countries = [];

for (let i = 0; i < countryObjects.length; i++) {

    countries.push(countryObjects[i].countryName);

}

console.log(countries);
const countriesSorted = countries.sort();

console.log(countriesSorted);


$('#country').autocomplete({
    source: countriesSorted,
    minLength: 0,
    scroll: true,
  })
  .focus(function () {
    $(this).autocomplete("search", "");
  });

$("#months-menu")
  .autocomplete({
    source: months,
    minLength: 0,
    scroll: true,
  })
  .focus(function () {
    $(this).autocomplete("search", "");
  });
