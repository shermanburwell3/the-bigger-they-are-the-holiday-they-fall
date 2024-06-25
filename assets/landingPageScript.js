

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

document.getElementById('holidayForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // for loop to grab the object of the country and pass it to the next page via local storage
  for (let i = 0; i < countryObjects.length; i++) {
    console.log(countryObjects[i]);
    if (countryObjects[i].countryName == document.getElementById('country').value) {
      localStorage.setItem('country', JSON.stringify(countryObjects[i]));
    }
  }

  // localStorage.setItem('month', document.getElementById('month'));
  console.log('Form Submitted');
 modal.classList.add("hidden");
 window.location.href = './detailPage.html';
})
  
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
})
});