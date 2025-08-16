document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("country-dropdown");
  const arrow = document.getElementById("arrow");
  const countryFlag = document.querySelector("#flag-icon img");
  let isOpen = false;

  function openDropdown() {
    arrow.classList.add("is-open");
    isOpen = true;
  }

  function closeDropdown() {
    arrow.classList.remove("is-open");
    isOpen = false;
  }

  // Arrow click → toggle
  arrow.addEventListener("click", () => {
    if (isOpen) {
      closeDropdown();
      select.blur();
    } else {
      openDropdown();
      select.focus();
    }
  });

  // Select click → toggle
  select.addEventListener("click", () => {
    if (!isOpen) openDropdown();
    else closeDropdown();
  });

  // Change → update flag + close dropdown + reset arrow
  select.addEventListener("change", () => {
    countryFlag.src = `assets/flags/${select.value}.png`;
    closeDropdown(); // 🔹 force arrow back
  });

  // Blur → reset arrow (extra safeguard)
  select.addEventListener("blur", () => {
    closeDropdown();
  });
});
