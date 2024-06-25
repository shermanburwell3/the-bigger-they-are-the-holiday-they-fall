// Event listener for BackButton button
const element = document.getElementById("backBtn");
element.addEventListener("click", function () {
  window.location.href = "landingPage.html";
});

// Makes the heart toggle yellow
function toggleColor(button) {
  button.classList.toggle('clicked');
}