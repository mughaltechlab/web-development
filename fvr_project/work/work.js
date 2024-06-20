// main dropdown function
function toggleMenu(header) {
    header.classList.toggle("active");
    var content = header.nextElementSibling;
    content.classList.toggle("active");
}

// nested dropdown
// -------------------------Badges--------------------------------------//
function toggleNestedMenu(header) {
    header.classList.toggle("active");
    var content = header.nextElementSibling;
    content.classList.toggle("active");
}
// const dropdownHeaderBadge = document.querySelector(
//     ".nested-dropdown-header"
//   );
//   const dropdownBadge = document.querySelector(".nested-dropdown");
//   const dropdownArrowBadge = document.querySelector(
//     ".nested-dropdown-arrow"
//   );
//   const dropdownListBadge = document.querySelector(".nested-dropdown-list");
//   const inputBadgeEnter = document.getElementById("nested-dropdown-input");

//   dropdownHeaderBadge.addEventListener("click", () => {
//     const isOpen = dropdownBadge.classList.contains("open");
//     dropdownListBadge.style.display = isOpen ? "none" : "block";
//     dropdownBadge.classList.toggle("open", !isOpen);
//     dropdownArrowBadge.classList.toggle("rotate", !isOpen);
//   });

//   const dropdownItemsBadge = document.querySelectorAll(
//     ".nested-dropdown-item"
//   );
//   dropdownItemsBadge.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       const selectedValue = e.target.textContent;
//       inputBadgeEnter.innerHTML = selectedValue;
//       dropdownBadge.classList.remove("open");
//       dropdownArrowBadge.classList.remove("rotate");
//       dropdownListBadge.style.display = "none";
//     });
//   });

//   window.addEventListener("click", (e) => {
//     if (!dropdownBadge.contains(e.target)) {
//       dropdownListBadge.style.display = "none";
//       dropdownBadge.classList.remove("open");
//       dropdownArrowBadge.classList.remove("rotate");
//     }
//   });