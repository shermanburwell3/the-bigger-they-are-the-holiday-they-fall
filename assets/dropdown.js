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




const countryObjects = [{countryName: 'France', countryCode: 'FR'},
    {countryName: 'Spain', countryCode: 'ES'},
    {countryName: 'United States', countryCode: 'US', cities: ["New York City", "Miami", "Los Angeles"], states: ["NY", "FL", "CA"]},
    {countryName: 'Turkey', countryCode: 'TR'},
    {countryName: 'Italy', countryCode: 'IT'},
    {countryName: 'Mexico', countryCode: 'MX'},
    {countryName: 'United Kingdom', countryCode: 'GB'},
    {countryName: 'Germany', countryCode: 'DE'},
    {countryName: 'Greece', countryCode: 'GR'},
    {countryName: 'Austria', countryCode: 'AT'},
    {countryName: 'Japan', countryCode: 'JP'}
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
