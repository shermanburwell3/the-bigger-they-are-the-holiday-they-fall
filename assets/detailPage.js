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

  // Retrieve holiday information from localStorage and parse it as JSON
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

  // Get the heart button element by its class
  const heartBtn = document.querySelector(".heartButton");

  // Add a click event listener to the heart button
  heartBtn.addEventListener("click", () => {

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
      listItem.textContent = `${favorite.countryName} - ${favorite.date} - ${favorite.name}`;
      listGroup.appendChild(listItem);
    });
  }

  // Display existing favorites on page load
  displayFavorites();
});

// Function to toggle the CSS class "clicked" on a button element
function toggleColor(button) {
  button.classList.toggle("clicked");
}