// List of countries for the dropdown
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

const countries = [];

for (let i = 0; i < countryObjects.length; i++) {

    countries.push(countryObjects[i].countryName);

}

// Sort countries to be in alphabetical order
const countriesSorted = countries.sort();

// Autocomplete/dropdown widget
$('#country').autocomplete({
    source: countriesSorted,
    minLength: 0,
    scroll: true,
  })
  .focus(function () {
    $(this).autocomplete("search", "");
  });
