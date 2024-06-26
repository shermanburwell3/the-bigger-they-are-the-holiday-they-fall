document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("holidayForm").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.getElementById("holidayForm").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });

  //Function to fetch holiday api for a given time and location
  function fetchHoliday(CountryCode, Year, targetMonth) {
    // Construct the API URL to fetch holidays
    const holidayAPI = `https://date.nager.at/api/v3/PublicHolidays/${Year}/${CountryCode}`;

    // Make the API call using fetch
    fetch(holidayAPI)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter holidays based on the target month
        const holidaysInTargetMonth = data.filter((holiday) => {
          // Months are zero-based, so add 1
          const holidayMonth = new Date(holiday.date).getMonth() + 1;
          return holidayMonth === targetMonth;
        });

        // Log the filtered holidays to the console
        console.log(holidaysInTargetMonth);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch operation
        console.error("Error fetching holidays:", error);
      });
  }

  document.getElementById("holidayForm").addEventListener("submit", (event) => {
    event.preventDefault();

    // for loop to grab the object of the country and pass it to the next page via local storage
    for (let i = 0; i < countryObjects.length; i++) {
      console.log(countryObjects[i]);
      if (
        countryObjects[i].countryName ==
        document.getElementById("country").value
      ) {
        localStorage.setItem("country", JSON.stringify(countryObjects[i]));
      }
    }

    // localStorage.setItem('month', document.getElementById('month'));
    console.log("Form Submitted");
    modal.classList.add("hidden");
    window.location.href = "./detailPage.html";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});