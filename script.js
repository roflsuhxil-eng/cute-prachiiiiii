// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = ["💖","💗","💕","💜","🤍","🌸"][Math.floor(Math.random()*6)];
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.fontSize = (18 + Math.random() * 18) + "px";
  heart.style.opacity = Math.random();
  heart.style.animation = "floatUp 6s linear forwards";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Sparkles
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.fontSize = (12 + Math.random() * 12) + "px";
  sparkle.style.opacity = 0.7;
  sparkle.style.animation = "fadeOut 3s ease-out forwards";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "1";

  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 3000);
}

// Run effects softly
setInterval(createHeart, 700);
setInterval(createSparkle, 1200);
