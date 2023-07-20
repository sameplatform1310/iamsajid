
// Global header
const header = document.querySelector("header");
header.innerHTML = `<a href="../"><img src="img/Sajid-logo.png" alt=""> <h3>Sajid M.</h3></a>
  <a href="About">About</a><div class="sidebar">
  <img id="myToggle" src="img/light-mode.svg" />
  <img src="img/to-top.svg" alt="" class="toTop" />
</div>
  `;

// Global footer
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `<a href="https://www.linkedin.com/in/iamsajidcom/" target="_blank"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
<a href="mailto:hello@iamsajid.com"><svg class="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>
<p class="subtext">&copy; ${currentYear} Sajid M. All Rights Reserved.</p>
`;

// Global favicon
const head = document.querySelector("head");
const favicon = document.createElement("link");
favicon.setAttribute("rel", "shortcut icon"); 
favicon.setAttribute("href", "favicon.png"); 
favicon.setAttribute("type", "image/x-icon");
head.appendChild(favicon);

// Dynamic Title
const title = document.querySelector("title");
const h1 = document.querySelector("h1");
if(h1){
  const h1Value = h1.innerText;
  title.innerText = `${h1Value} - Sajid M.`;
}
else{
  title.innerText = "Sajid M.";
}



// Darkmode
const darkMode = document.getElementById("myToggle");
  darkMode.addEventListener("click", changeMode);

  const currentMode = localStorage.getItem("mode");
  if (currentMode === "dark") {
    document.body.classList.add("dark-mode");
    darkMode.src = "img/dark-mode.svg"; 
  }

  function changeMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
      darkMode.src = "img/dark-mode.svg"; 
    } else {
      localStorage.setItem("mode", "light");
      darkMode.src = "img/light-mode.svg"; 
    }
  }


  // Scroll to top
  const topBtn = document.querySelector(".toTop");

  window.onscroll = function() {displayTopBtn()};

function displayTopBtn() {
  if (document.documentElement.scrollTop > 1000) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
  topBtn.addEventListener('click', toTop);

  function toTop(){
    document.documentElement.scrollTop = 0;
  }
