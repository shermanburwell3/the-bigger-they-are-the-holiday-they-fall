// Event listener for BackButton button
const element = document.getElementById("backBtn");
element.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Makes the heart toggle yellow
function toggleColor(button) {
  button.classList.toggle('clicked');
}