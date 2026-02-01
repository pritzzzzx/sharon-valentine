const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const music = document.getElementById("bg-music");

/* 🎵 Start music on first click anywhere */
document.body.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
});

/* 🏃 NO button runs away */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* 💥 Heart explosion */
function explodeHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "24px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 400;

    heart.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
      ],
      { duration: 1200, easing: "ease-out" }
    );

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

/* 💘 YES click */
yesBtn.addEventListener("click", () => {
  explodeHearts();

  setTimeout(() => {
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background: linear-gradient(135deg, #ffb6c1, #ffd6e0);
        text-align:center;
      ">
        <h1 style="font-family:'Pacifico', cursive; font-size:50px; color:#ff4d6d;">
          YAYYYYY CUTU 💖💖💖
        </h1>
        <p style="font-family:Poppins; font-size:20px;">
          You just made me the happiest person alive 😭<br><br>
          I love you endlessly, Sharon Arlin 🧸🌹
        </p>
      </div>
    `;
  }, 800);
});

/* ⏳ Days since Jan 17, 2025 */
const startDate = new Date("2025-01-17");
const today = new Date();
const diffTime = today - startDate;
const daysTogether = Math.floor(diffTime / (1000 * 60 * 60 * 24));

const counter = document.createElement("p");
counter.innerHTML = `💞 We've been talking for <b>${daysTogether}</b> beautiful days 💞`;
counter.style.marginTop = "15px";
counter.style.fontSize = "14px";
counter.style.color = "#ff4d6d";

document.querySelector(".text").appendChild(counter);
