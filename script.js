const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      text-align:center;
      padding-top:100px;
      font-family:Comic Sans MS;
      background: linear-gradient(135deg, #ffb6c1, #ffd6e0);
      height:100vh;
    ">
      <h1>YAYYYYY CUTU 💖💖💖</h1>
      <h2>You just made me the happiest boyfriend 😭</h2>
      <p>I love you, Sharon Arlin 🧸🌹</p>
      <p>Happy Valentine’s Day 💘</p>
    </div>
  `;
});
