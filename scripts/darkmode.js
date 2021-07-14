/* El modo oscuro se aplica automáticamente dependiendo del tema
actual del dispositivo, pero, si el usuario cambia el tema
de la página, se guardaran sus preferencias */

const btn_darkmode = document.getElementById("darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

var theme = prefersDarkScheme.matches ? "dark" : "light";
const savedTheme = localStorage.getItem("theme") || theme;
if (savedTheme == "dark") {
  btn_darkmode.checked = false;
  document.body.classList.toggle("dark-theme");
} else if (savedTheme == "light") {
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
