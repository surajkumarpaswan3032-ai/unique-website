// Button interaction
document.getElementById("hiBtn").addEventListener("click", () => {
  alert("Thanks for visiting NeoPulse 🚀");
});

// Floating particles
const count = 25;

for (let i = 0; i < count; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = 4 + Math.random() * 6 + "s";
  particle.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(particle);
}
