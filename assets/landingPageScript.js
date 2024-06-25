

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
  localStorage.setItem('country', document.getElementById('#country').textContent);
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