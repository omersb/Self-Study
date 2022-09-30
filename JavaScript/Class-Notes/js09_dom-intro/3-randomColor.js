const box = document.querySelector(".box");
box.addEventListener("click", () => {
  const k = Math.floor(Math.random() * 255);
  const m = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);
  box.style.backgroundColor = `rgb(${k},${m},${y})`;
});
