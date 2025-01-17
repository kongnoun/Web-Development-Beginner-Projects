// document.addEventListener("DOMContentLoaded", () => {
//   const bodyEl = document.querySelector("body");
//   const headerEl = document.querySelector("header");
//   const darkModeToggle = document.querySelector("#darkModeToggle");
//   const toggleText = document.querySelector(".ms-3"); // Text span next to the toggle
//   const mainImage = document.querySelector("main img"); // Image inside the main section
//   const headerTitle = document.querySelector("header h1"); // Header title

//   // Constants for image paths and text
//   const LIGHT_MODE_TEXT = "Switch to Dark Mode";
//   const DARK_MODE_TEXT = "Switch to Light Mode";
//   console.table({LIGHT_MODE_TEXT, DARK_MODE_TEXT});
//   const LIGHT_MODE_TITLE = "Dark Mode";
//   const DARK_MODE_TITLE = "Light Mode";
//   const LIGHT_MODE_IMAGE = "./img/lightmode.png";
//   const DARK_MODE_IMAGE = "./img/darkmode.png";

//   // Initialize mode based on localStorage or default to light mode
//   const isDarkMode = JSON.parse(localStorage.getItem("mode")) || false;
//   darkModeToggle.checked = isDarkMode;
//   updateMode();

//   /**
//    * Updates the theme, text, and image based on the toggle state.
//    */
//   function updateMode() {
//     const isDark = darkModeToggle.checked;

//     // Update classes for dark mode
//     bodyEl.classList.toggle("dark-mode", isDark);
//     headerEl.classList.toggle("darkmode", isDark);

//     // Update text for toggle and header
//     toggleText.textContent = isDark ? DARK_MODE_TEXT : LIGHT_MODE_TEXT;
//     toggleText.style.fontWeight = "semibold";
//     toggleText.style.color = isDark ? "white" : "orange";
//     headerTitle.textContent = isDark ? DARK_MODE_TITLE : LIGHT_MODE_TITLE;

//     // Update image source and alt text
//     mainImage.src = isDark ? DARK_MODE_IMAGE : LIGHT_MODE_IMAGE;
//     mainImage.alt = isDark ? "Dark Mode Image" : "Light Mode Image";

//     // Save the mode to localStorage
//     localStorage.setItem("mode", JSON.stringify(isDark));
//   }

//   // Attach event listener for the toggle
//   darkModeToggle.addEventListener("input", () => {
//     updateMode();
//   });
// });
