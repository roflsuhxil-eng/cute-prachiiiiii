// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = ["💖","💗","💕","💜","🤍","🌸"][Math.floor(Math.random() * 6)];
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (16 + Math.random() * 20) + "px";
  heart.style.opacity = 0.6 + Math.random() * 0.4;
  heart.style.animation = "floatUp 8s linear forwards";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

// Soft sparkles
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.fontSize = (10 + Math.random() * 14) + "px";
  sparkle.style.opacity = 0.6;
  sparkle.style.animation = "fadeOut 4s ease-out forwards";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "1";

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 4000);
}

// Run animations
setInterval(createHeart, 900);
setInterval(createSparkle, 1400);
