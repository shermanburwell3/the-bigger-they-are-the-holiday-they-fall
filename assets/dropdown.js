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




const countries = ['France',
    'Spain',
    'United States',
    'Turkey',
    'Italy',
    'Mexico',
    'United Kingdom',
    'Germany',
    'Greece',
    'Austria',
    'Japan'
];

const countriesSorted = countries.sort();

$('#countries-menu').autocomplete({
    source: countriesSorted,
    scroll: true
}).focus(function() {
    $(this).autocomplete("search", "");
});