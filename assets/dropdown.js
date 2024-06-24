const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const countries = [
  "France",
  "Spain",
  "United States",
  "Turkey",
  "Italy",
  "Mexico",
  "United Kingdom",
  "Germany",
  "Greece",
  "Austria",
  "Japan",
];

console.log(countries);
const countriesSorted = countries.sort();

console.log(countriesSorted);

$("#countries-menu")
  .autocomplete({
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
