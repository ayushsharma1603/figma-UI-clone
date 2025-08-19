const menuToggler = document.getElementById("menuToggler");
const navOverlay = document.getElementById("navOverlay");
const closeOverlay = document.getElementById("closeOverlay");
const overlayBackdrop = document.getElementById("overlayBackdrop");

menuToggler.addEventListener("click", () => {
  navOverlay.classList.add("active");
  overlayBackdrop.classList.add("active");
});

closeOverlay.addEventListener("click", () => {
  navOverlay.classList.remove("active");
  overlayBackdrop.classList.remove("active");
});

overlayBackdrop.addEventListener("click", () => {
  navOverlay.classList.remove("active");
  overlayBackdrop.classList.remove("active");
});
