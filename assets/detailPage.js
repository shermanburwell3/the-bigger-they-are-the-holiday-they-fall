// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
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
});

// Function to toggle the CSS class "clicked" on a button element
function toggleColor(button) {
  button.classList.toggle("clicked");
}