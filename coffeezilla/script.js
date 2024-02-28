const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

const randomString = (length) => {
  const fixedTexts = [
    "ExposingFakeGurus",
    "BustingScams",
    "PumpTheStock",
    "TenMillionStudio",
    "VoidZilla",
    "Sifu",
    "Loganpaul",
    "SBF",
    "FTX",
    "Crypto",
    "PonziScheme",
    "Guilty",
    "Busted",
    "DayTrading",
  ];
  const textFrequency = 0.05;

  let randomStr = Array.from({ length }, () => randomChar());

  for (let i = 0; i < length * textFrequency; i++) {
    const randomText =
      fixedTexts[Math.floor(Math.random() * fixedTexts.length)];
    const textIndex = Math.floor(
      Math.random() * (length - randomText.length + 1)
    );
    randomStr.splice(textIndex, randomText.length, ...randomText.split(""));
  }

  return randomStr.join("");
};

const bg = document.querySelector(".bg"),
  bgLetters = bg.querySelector(".bg-letters");

const handleOnMove = (e) => {
  const rect = bg.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  bgLetters.style.setProperty("--x", `${x}px`);
  bgLetters.style.setProperty("--y", `${y}px`);

  bgLetters.innerText = randomString(10000);
};

bg.onmousemove = (e) => handleOnMove(e);

bg.ontouchmove = (e) => handleOnMove(e.touches[0]);
