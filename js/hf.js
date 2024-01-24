// Google font
document.addEventListener("DOMContentLoaded", function () {
  var head = document.head;

  var link1 = document.createElement("link");
  link1.rel = "preconnect";
  link1.href = "https://fonts.googleapis.com";
  head.appendChild(link1);

  var link2 = document.createElement("link");
  link2.rel = "preconnect";
  link2.href = "https://fonts.gstatic.com";
  link2.crossOrigin = "anonymous";
  head.appendChild(link2);

  var link3 = document.createElement("link");
  link3.rel = "stylesheet";
  link3.href =
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap";
  head.appendChild(link3);
});

// Global header
const header = document.querySelector("header");
header.innerHTML = `<a href="../"><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.19 230.96">
<g id="Layer_1-2" data-name="Layer 1">
  <path class="cls-1" d="M134.1,117.64l-42.99-12.34c-4.08-1.17-5.39-6.28-2.37-9.25l49.84-49.48c14.77-14.66,8.31-39.79-11.69-45.52h0c-9.65-2.76-20.05,0-27.04,7.22L11.26,99.51c-9.53,9.85-5.15,26.3,8,30.12l38.27,11.12c3.77,1.08,5.26,5.65,2.82,8.75L3.51,209.43c-6.59,6.94-3.46,18.4,5.74,21.04h0c3.58,1.03,7.44,.44,10.55-1.62l119.28-78.76c12.88-8.51,9.86-28.19-4.97-32.45Z"/>
</g>
</svg>Sajid</a>
<div id="mode"><p class="subtext mode-text">Light</p><label class="switch">
  <input id="toggle" type="checkbox" />
  <div class="toggle">
    <div class="toggle-button"></div>
  </div>
</label></div>`;

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

if (title.textContent.trim() === "") {
  if (h1) {
    const h1Value = h1.innerText;
    title.textContent = `${h1Value} - Sajid`;
  } else {
    title.textContent = "Sajid";
  }
}

// Dark mode
const toggle = document.getElementById("toggle");
let modeText = document.querySelector(".mode-text");

// Check local storage preference
const localDarkMode = localStorage.getItem("darkMode");

// Check system preference
const systemDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Set mode based on priority: local storage > system preference
if (localDarkMode === "true") {
  dark();
} else if (localDarkMode === "false") {
  light();
} else if (systemDarkMode) {
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
  document.body.classList.add("dark-mode");
  modeText.innerText = "Dark";
  localStorage.setItem("darkMode", "true");
}

function light() {
  toggle.checked = false;
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", "false");
  modeText.innerText = "Light";
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
</div>
<a href="https://www.youtube.com/@whosajid" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
<a href="https://www.linkedin.com/in/whosajid/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>

<a href="mailto:hello@iamsajid.com"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>
<p id="greetings"></p>
<p class="subtext">&copy; ${currentYear} Sajid</p>
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
