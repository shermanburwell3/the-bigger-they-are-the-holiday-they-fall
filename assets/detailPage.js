document.addEventListener("DOMContentLoaded", () => {
  // Retrieve myFavorites from localStorage or initialize as an empty array
  let favList = JSON.parse(localStorage.getItem("myFavorites")) || [];

  // Get the back button element by its ID
  const backBtn = document.getElementById("backBtn");

  // Check if the back button exists
  if (backBtn) {
    // Add a click event listener to the back button
    backBtn.addEventListener("click", () => {
      // Redirect the user to the index.html page when the back button is clicked
      window.location.href = "index.html";
    });
  }

  // Function to display holiday information
  function displayHolidayInfo() {
    const holidayInfo = JSON.parse(localStorage.getItem("holidayInfo"));
    // Check if holidayInfo exists
    if (holidayInfo) {
      // Parse the date stored in holidayInfo, add one day to it, and format it back to a readable string
      const date = new Date(holidayInfo.date);
      date.setDate(date.getDate() + 1); // Add one day
      // Define options for formatting the date
      const options = { month: "long", day: "numeric" };
      // Format the updated date as a string in a specific locale
      const formattedDate = date.toLocaleDateString("en-US", options);
      // Update the holidayInfo object with the new formatted date
      holidayInfo.date = formattedDate;
      // Display the updated holiday information in the HTML elements
      document.getElementById("holidayName").textContent = holidayInfo.name;
      document.getElementById("holidayDate").textContent = holidayInfo.date;
      document.getElementById("holidayCountry").textContent =
        holidayInfo.countryName;
    }
  }

  // Get the heart button element by its class
  const heartBtn = document.querySelector(".heartButton");

  // Add a click event listener to the heart button
  heartBtn.addEventListener("click", () => {
    // Toggle the 'clicked' class on the heart button
    heartBtn.classList.toggle("clicked");

    // Retrieve holiday information from localStorage
    const holidayInfo = JSON.parse(localStorage.getItem("holidayInfo"));
    // Check if the new favorite already exists in favList
    const isDuplicate = favList.some(
      (favorite) =>
        favorite.countryName === holidayInfo.countryName &&
        favorite.date === holidayInfo.date &&
        favorite.name === holidayInfo.name
    );
    // If it's not a duplicate, add it to favList and localStorage
    if (!isDuplicate) {
      const newFavorite = {
        countryName: holidayInfo.countryName,
        date: holidayInfo.date,
        name: holidayInfo.name,
      };
      favList.push(newFavorite);
      localStorage.setItem("myFavorites", JSON.stringify(favList));
      // Display the new favorite in the list-group
      displayFavorites();
    }
  });

  // Function to display favorites in the list-group
  function displayFavorites() {
    const listGroup = document.querySelector(".list-group");
    listGroup.innerHTML = ""; // Clear the existing list items
    // Iterate over each favorite and create a list item to display it
    favList.forEach((favorite) => {
      const listItem = document.createElement("button");
      listItem.textContent = `${favorite.name}: ${favorite.countryName}, ${favorite.date}`;
      listGroup.appendChild(listItem);
    });
  }

  // Display existing favorites on page load
  displayFavorites();

  // Function to toggle the CSS class "clicked" on a button element
  function toggleColor(button) {
    button.classList.toggle("clicked");
  }

  // Event listener for form submission to handle holiday search functionality
  document.getElementById("holidayForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve form input values
    const countryName = document.getElementById("country").value;
    const date = document.getElementById("date").value;
    const year = new Date(date).getFullYear();
    const targetDate = new Date(date);

    // Find the country code based on the selected country name
    let countryCode = "";
    for (let i = 0; i < countryObjects.length; i++) {
      if (countryObjects[i].countryName === countryName) {
        countryCode = countryObjects[i].countryCode;
        localStorage.setItem("country", JSON.stringify(countryObjects[i]));
        break;
      }
    }

    // Fetch holidays data based on the country code, year, and target date
    if (countryCode) {
      fetchHoliday(countryCode, year, countryName, targetDate);
      removeWeatherCards();
      weatherWidget();
    }
  });

  // Function to fetch holiday data from the API and process the results
  function fetchHoliday(countryCode, year, countryName, targetDate) {
    const holidayAPI = `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`;

    // Fetch holiday data from the API
    fetch(holidayAPI)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter holidays to find those occurring after the target date
        const futureHolidays = data.filter(
          (holiday) => new Date(holiday.date) >= targetDate
        );

        // Find the closest future holiday based on the target date
        const closestHoliday = futureHolidays.reduce((closest, holiday) => {
          const holidayDate = new Date(holiday.date);
          const diff = holidayDate - targetDate;
          if (!closest || diff < closest.diff) {
            return { ...holiday, diff };
          }
          return closest;
        }, null);

        // If a closest future holiday is found, store its information and redirect to detail page
        if (closestHoliday) {
          localStorage.setItem("weatherDate", closestHoliday.date);

          const holidayInfo = {
            name: closestHoliday.name,
            date: new Date(closestHoliday.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            }),
            countryName: countryName,
          };
          localStorage.setItem("holidayInfo", JSON.stringify(holidayInfo));
          displayHolidayInfo();
        }
      })
      .catch((error) => {
        console.error("Error fetching holidays:", error);
      });
  }

  // Initial display of holiday information
  displayHolidayInfo();
});