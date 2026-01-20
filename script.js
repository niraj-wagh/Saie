const noBtn = document.getElementById("no1");

function moveButton() {
  const x = Math.random() * 260 - 130;
  const y = Math.random() * 120 - 60;

  noBtn.style.position = "absolute";
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseenter", moveButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});
