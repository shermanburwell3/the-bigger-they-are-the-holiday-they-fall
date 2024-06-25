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




const countryObjects = [{countryName: 'France'},
    {countryName: 'Spain'},
    {countryName: 'United States'},
    {countryName: 'Turkey'},
    {countryName: 'Italy'},
    {countryName: 'Mexico'},
    {countryName: 'United Kingdom'},
    {countryName: 'Germany'},
    {countryName: 'Greece'},
    {countryName: 'Austria'},
    {countryName: 'Japan'}
];

const countries = [];

for (let i = 0; i < countryObjects.length; i++) {

    countries.push(countryObjects);
    
}

console.log(countries);
const countriesSorted = countries.sort();

console.log(countriesSorted);

$('#country').autocomplete({
    source: countriesSorted,
    minLength: 0,
    scroll: true
}).focus(function() {
    $(this).autocomplete("search", "");
});

$('#months-menu').autocomplete({
    source: months,
    minLength: 0,
    scroll: true
}).focus(function() {
    $(this).autocomplete("search", "");
});