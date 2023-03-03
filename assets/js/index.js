const toggleBtn = document.querySelector(".toggle-button");
const container = document.querySelector(".container");

toggleBtn.addEventListener("click", function () {
  container.classList.toggle("active");
});
