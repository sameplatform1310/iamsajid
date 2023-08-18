// Global header
const header = document.querySelector("header");
header.innerHTML = `<a href="../"><img src="/img/Sajid-logo.png" />Sajid</a>
<label class="switch">
  <input id="toggle" type="checkbox" />
  <div class="toggle">
    <div class="toggle-button"></div>
  </div>
</label>
<a href="About">About</a>`;

// Google Analytics
var gaScript = document.createElement("script");
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-Y5FVPTSY07";
gaScript.async = true;
document.head.appendChild(gaScript);

function initializeAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-Y5FVPTSY07");
}

gaScript.onload = initializeAnalytics;

// Global favicon
const favicon = document.createElement("link");
favicon.setAttribute("rel", "shortcut icon");
favicon.setAttribute("href", "favicon.png");
favicon.setAttribute("type", "image/x-icon");
document.head.appendChild(favicon);

// Dynamic Title
const title = document.querySelector("title");
const h1 = document.querySelector("h1");
if (h1) {
  const h1Value = h1.innerText;
  title.innerText = `${h1Value} - Sajid M.`;
} else {
  title.innerText = "Sajid M.";
}

// Dark mode toggle button
const toggle = document.getElementById("toggle");
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
  dark();
}

toggle.addEventListener("click", toggleMode);

function toggleMode() {
  if (toggle.checked) {
    dark();
  } else {
    light();
  }
}

function dark() {
  toggle.checked = true;
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", "true");
}
function light() {
  toggle.checked = false;
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
}

// Global footer
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `<div class="to-top">
<?xml version="1.0" ?>
<svg
  height="15px"
  id="Layer_1"
  version="1.1"
  viewBox="0 0 30 30"
  width="15px"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <path
    d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
  />
</svg>
</div><a href="https://www.linkedin.com/in/iamsajidcom/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
<a href="mailto:hello@iamsajid.com"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>
<p id="greetings"></p>
<p class="subtext">&copy; ${currentYear} Sajid M. All Rights Reserved.</p>
`;

// Scroll to top
const topBtn = document.querySelector(".to-top");

window.onscroll = function () {
  displayTopBtn();
};

function displayTopBtn() {
  if (window.scrollY > 1000) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", toTop);
function toTop() {
  window.scrollTo(0, 0);
}

// Footer greetings
let greetings = document.getElementById("greetings");
let message;
const today = new Date();
const options = { weekday: "long" };
const day = today.toLocaleDateString("en-US", options);

if (day === "Saturday" || day === "Sunday") {
  if (today.getHours() >= 18) {
    message = "Enjoy the rest of your Weekend!";
  } else {
    message = "Happy Weekend!";
  }
} else {
  if (today.getHours() >= 18) {
    message = `Enjoy the rest of your ${day}!`;
  } else {
    message = `Have a great ${day}!`;
  }
}

greetings.innerText = message;
