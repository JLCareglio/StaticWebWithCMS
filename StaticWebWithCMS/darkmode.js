const btn = document.querySelector(".btn-toggle");
const btn_darkmode = document.getElementById("darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  btn_darkmode.checked = false;
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  btn_darkmode.checked = true;
  document.body.classList.toggle("light-theme");
}

btn_darkmode.addEventListener("change", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
