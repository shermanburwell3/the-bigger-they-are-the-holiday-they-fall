// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the open modal button, close modal button, and modal element
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  // Event listener to open the modal when the open modal button is clicked
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Event listener to close the modal when the close modal button is clicked
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Event listener to close the modal when a click event occurs outside the modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // Event listener for form submission to handle holiday search functionality
  document.getElementById("holidayForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // Retrieve form input values
    const countryName = document.getElementById("country").value;
    const date = document.getElementById("date").value;
    const year = new Date(date).getFullYear();
    const targetDate = new Date(date);

    // Store the selected date in local storage under the key "weatherDate"
    localStorage.setItem("weatherDate", date);

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
    }

    // Hide the modal after form submission
    modal.classList.add("hidden");
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
          const holidayInfo = {
            name: closestHoliday.name,
            date: new Date(closestHoliday.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            }),
            countryName: countryName,
          };
          localStorage.setItem("holidayInfo", JSON.stringify(holidayInfo));
          window.location.href = "./detailPage.html";
        }
      })
      .catch((error) => {
        console.error("Error fetching holidays:", error);
      });
  }
});