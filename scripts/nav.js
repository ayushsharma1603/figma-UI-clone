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



// const searchBtn = document.querySelector(".search-btn");
//   const searchBox = document.getElementById("searchBox");

//   // Toggle search box on button click
//   searchBtn.addEventListener("click", (e) => {
//     e.stopPropagation(); // prevent closing immediately
//     searchBox.style.display =
//       searchBox.style.display === "block" ? "none" : "block";
//   });

//   // Hide search box on outside click
//   document.addEventListener("click", (e) => {
//     if (!searchBox.contains(e.target) && !searchBtn.contains(e.target)) {
//       searchBox.style.display = "none";
//     }
//   });