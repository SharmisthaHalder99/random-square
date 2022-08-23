const circle = document.getElementById("circle");
const body = document.body;

circle.addEventListener("click", function () {
  const square = document.createElement("div");
  square.className = "square-ele";
  square.style.left = Math.floor(Math.random() * 100) + "vw";
  body.appendChild(square);
  setTimeout(() => {
    body.removeChild(square);
  }, 2000);
});
