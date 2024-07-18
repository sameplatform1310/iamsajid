
// hamburger
const hamburger = document.querySelector(".hamburger");
const cssLink = document.querySelectorAll(".css-link");
const cssLinks = document.querySelector(".css-links");
cssLinks.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  cssLinks.classList.toggle("css-links-active");
  cssLink.forEach((link) => {
    link.classList.toggle("css-link-active");
  });
});

// copy button
document.addEventListener("DOMContentLoaded", function () {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const preElement = button.parentElement;
      const code = preElement.textContent.trim().replace("Copy", "").trim();

      navigator.clipboard.writeText(code).then(() => {
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      });
    });
  });
});

// CSS Toggle
// hide code
// swing
const codeToggle = document.getElementById("code-toggle");
const preCode = document.querySelectorAll("pre");
codeToggle.addEventListener("click", () => {
  preCode.forEach((code) => {
    code.classList.toggle("no-pre");
  });
});

// Gradient heading
const ghToggle = document.getElementById("gh-toggle");
const gradientHeading = document.querySelector(".gradient-heading");
ghToggle.addEventListener("click", () => {
  gradientHeading.classList.toggle("no-gradient-heading");
});

// Gradient Border
const gbToggle = document.getElementById("gb-toggle");
const gradientBorders = document.querySelectorAll(".gradient-border");
gbToggle.addEventListener("click", () => {
  gradientBorders.forEach((border) => {
    border.classList.toggle("no-gradient-border");
  });
});

// cards
const cardToggle = document.getElementById("card-toggle");
const cssCard = document.querySelector(".css-card");
const politeCard = document.querySelector(".polite-card");
cardToggle.addEventListener("click", () => {
  cssCard.classList.toggle("no-css-card");
  politeCard.classList.toggle("no-polite-card");
});

// radio cards
const radioToggle = document.getElementById("radio-toggle");
const radioButtons = document.querySelector(".no-radio-buttons");
const radioCards = document.querySelector(".radio-cards");
radioToggle.addEventListener("click", () => {
  radioButtons.classList.toggle("no-radio-buttons");
  radioButtons.classList.toggle("radio-buttons");

  radioCards.classList.toggle("radio-cards");
  radioCards.classList.toggle("no-radio-cards");
});

// hover-scale
const scaleToggle = document.getElementById("scale-toggle");
const cssScale = document.querySelectorAll(".scale-toggle");
scaleToggle.addEventListener("click", () => {
  cssScale.forEach((element) => {
    element.classList.toggle("no-scale-toggle");
  });
});

// hover-float
const floatToggle = document.getElementById("float-toggle");
const cssFloat = document.querySelectorAll(".float-toggle");
floatToggle.addEventListener("click", () => {
  cssFloat.forEach((element) => {
    element.classList.toggle("no-float-toggle");
  });
});

// hover-fill
const fillToggle = document.getElementById("fill-toggle");
const btnFill = document.querySelector(".fill-toggle");
const svgFill = document.querySelector(".svg-fill-toggle");
const textFill = document.querySelector(".text-fill-toggle");
fillToggle.addEventListener("click", () => {
  btnFill.classList.toggle("no-fill-toggle");
  svgFill.classList.toggle("no-svg-fill-toggle");
  textFill.classList.toggle("no-text-fill-toggle");
});

// dynamic heading - vw
const dhToggle = document.getElementById("dh-toggle");
const dh = document.querySelector(".dh");
dhToggle.addEventListener("click", () => {
  dh.classList.toggle("no-dh");
});

// dynamic heading - clamp
const dhcToggle = document.getElementById("dhc-toggle");
const dhc = document.querySelector(".dhc");
dhcToggle.addEventListener("click", () => {
  dhc.classList.toggle("no-dhc");
});

// dynamic box
const flexToggle = document.getElementById("flex-toggle");
const flexT = document.querySelector(".flex-toggle");
flexToggle.addEventListener("click", () => {
  flexT.classList.toggle("no-flex-toggle");
});

// snap scrolling
const snapToggle = document.getElementById("snap-toggle");
const snapT = document.querySelector(".snap-toggle");
snapToggle.addEventListener("click", () => {
  snapT.classList.toggle("no-snap-toggle");
});

// better lists
const listToggle = document.getElementById("list-toggle");
const listT = document.querySelector(".list-toggle");
listToggle.addEventListener("click", () => {
  listT.classList.toggle("list-toggle");
});

// links and buttons
const lbToggle = document.getElementById("lb-toggle");
const linkT = document.querySelector(".link-toggle");
const linkT2 = document.querySelector(".link-toggle2");
const buttonT = document.querySelector(".button-toggle");
lbToggle.addEventListener("click", () => {
  linkT.classList.toggle("link-toggle");
  linkT2.classList.toggle("btn");
  linkT2.classList.toggle("link-toggle2");
  buttonT.classList.toggle("button-toggle");
});
// links and buttons
const lbFill = document.getElementById("lb-fill");
const linkF = document.querySelector(".link-fill");
const linkF2 = document.querySelector(".link-fill2");
const buttonF = document.querySelector(".button-fill");
lbFill.addEventListener("click", () => {
  linkF.classList.toggle("link-fill");
  linkF2.classList.toggle("link-fill2");
  buttonF.classList.toggle("button-fill");
});

// animations

// bounce
const bounceToggle = document.getElementById("bounce-toggle");
const bounceT = document.querySelector(".bounce");
bounceToggle.addEventListener("click", () => {
  bounceT.classList.toggle("no-bounce");
});
// pulse
const pulseToggle = document.getElementById("pulse-toggle");
const pulseT = document.querySelector(".pulse");
pulseToggle.addEventListener("click", () => {
  pulseT.classList.toggle("no-pulse");
});
// flip
const flipToggle = document.getElementById("flip-toggle");
const flipT = document.querySelector(".flip");
flipToggle.addEventListener("click", () => {
  flipT.classList.toggle("no-flip");
});

// swing
const swingToggle = document.getElementById("swing-toggle");
const swingT = document.querySelector(".swing");
swingToggle.addEventListener("click", () => {
  swingT.classList.toggle("no-swing");
});

// shadow
const shadowToggle = document.getElementById("shadow-toggle");
const shadowT = document.querySelector(".better-shadow");
shadowToggle.addEventListener("click", () => {
  shadowT.classList.toggle("dark-shadow");
});
