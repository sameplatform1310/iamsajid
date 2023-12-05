// Dynamics
// Heading
// Code
const dyH1 = document.querySelector(".dynamic-heading");
const h1Array = [
  "Design Website",
  "Build Website",
  "Design Product",
  "Build Product",
];
let currentTextIndex = 0;
let currentText = "";
let currentTextPosition = 0;
let isDeleting = false;
function animateTyping() {
  const speed = 100;
  dyH1.textContent = currentText.substring(0, currentTextPosition);
  if (!isDeleting && currentTextPosition === currentText.length) {
    isDeleting = true;
    setTimeout(animateTyping, speed);
  } else if (isDeleting && currentTextPosition === 0) {
    isDeleting = false;
    currentTextIndex = (currentTextIndex + 1) % h1Array.length;
    currentText = h1Array[currentTextIndex];
    setTimeout(animateTyping, speed);
  } else {
    currentTextPosition += isDeleting ? -1 : 1;
    setTimeout(animateTyping, speed);
  }
}

animateTyping();

// Shooting
// star
// Animation
function star() {
  var maxX = 0.4 * window.innerWidth;
  var maxY = window.innerHeight;
  var randomLeft = Math.floor(Math.random() * (2 * maxX + 1)) - maxX;
  var randomBottom = Math.random() * maxY;
  var star = document.querySelector(".star");
  star.style.right = randomLeft + "px";
  star.style.bottom = randomBottom + "px";
}
setInterval(star, 1000);
// Asteroid
// moving
// Animation
const heroDiv = document.querySelector(".home-hero");
const maxCircles = 5;
const circles = [];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createCircle() {
  const airDiv = document.createElement("span");
  airDiv.classList.add("air");

  const widthHeight = Math.floor(Math.random() * 20);
  airDiv.style.width = widthHeight + "px";
  airDiv.style.height = widthHeight + "px";
  airDiv.style.boxShadow = `-${widthHeight / 5}px ${widthHeight / 5}px ${
    widthHeight / 2
  }px ${widthHeight * 0}px var(--colors) inset, ${widthHeight / 5}px -${
    widthHeight / 5
  }px ${widthHeight}px -${widthHeight / 5}px var(--colora2)`;
  const x1 = Math.floor(
    window.innerWidth * 0.3 + Math.random() * (window.innerWidth * 0.6)
  );
  const y1 = Math.floor(Math.random() * window.innerHeight * 0.7);
  const targetX = 0;
  const targetY = window.innerHeight;
  const radianAngle = (144 * Math.PI) / 180;
  const distanceX = Math.abs(x1 - targetX);
  const distanceY = Math.abs(targetY - y1);
  const length = Math.min(
    distanceX / Math.cos(radianAngle),
    distanceY / Math.sin(radianAngle)
  );
  let x2 = x1 + length * Math.cos(radianAngle);
  let y2 = y1 + length * Math.sin(radianAngle);
  if (x2 > targetX) {
    x2 = targetX;
    y2 = Math.floor(y1 + (targetX - x1) * Math.tan(radianAngle));
  } else if (y2 < targetY) {
    y2 = targetY;
    x2 = Math.floor(x1 + (y1 - targetY) / Math.tan(radianAngle));
  }
  const css = document.styleSheets[0];
  const keyframesName = `air-ani-${y1}-${x1}`;

  css.insertRule(`@keyframes ${keyframesName} {
  0% {
    opacity: 0;
    left: ${x1}px;
    top: ${y1}px;

  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: ${x2}px;
    top: ${y2}px;

  }
}`);

  if (x1 < window.innerWidth * 0.5 || y1 > window.innerHeight * 0.5) {
    const keySpeed = 0.5;
    airDiv.style.animation = `${keyframesName} ${keySpeed}s infinite ease-in-out`;
  } else {
    const keySpeed = 1;
    airDiv.style.animation = `${keyframesName} ${keySpeed}s infinite ease-in-out`;
  }

  heroDiv.appendChild(airDiv);
  circles.push(airDiv);

  await delay(500);
  heroDiv.removeChild(airDiv);
  circles.splice(circles.indexOf(airDiv), 1);
}

async function updateCircles() {
  while (circles.length > maxCircles) {
    const circleToRemove = circles.shift();
    heroDiv.removeChild(circleToRemove);
  }

  for (let i = 0; i < maxCircles - circles.length; i++) {
    await createCircle();
  }
}

setInterval(updateCircles, 1000);
// Background
// star
// Animation
function toggleTwinkle() {
  const starsBg = document.querySelector("#star-bg");
  const stars = starsBg.querySelectorAll("use");

  stars.forEach((star) => star.classList.remove("twinkle"));

  const numStarsToTwinkle = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < numStarsToTwinkle; i++) {
    const randomIndex = Math.floor(Math.random() * stars.length);
    stars[randomIndex].classList.add("twinkle");
  }
}

setInterval(toggleTwinkle, 1000);
