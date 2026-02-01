document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const music = document.getElementById("bg-music");
  const bg = document.getElementById("floating-bg");

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
      heart.textContent = "💖";
      heart.style.position = "fixed";
      heart.style.left = "50%";
      heart.style.top = "50%";
      heart.style.fontSize = "26px";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";

      const x = (Math.random() - 0.5) * 500;
      const y = (Math.random() - 0.5) * 500;

      heart.animate(
        [
          { transform: "translate(0,0)", opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ],
        { duration: 1500, easing: "ease-out" }
      );

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }
  }

  /* 💘 YES click */
  yesBtn.addEventListener("click", () => {
    music.volume = 0.6;
    music.play();
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
          <h1 style="font-family:'Pacifico', cursive; font-size:52px; color:#ff4d6d;">
            YAYYYYY CUTU 💖💖💖
          </h1>
          <p style="font-family:Poppins; font-size:20px;">
            You just made me the happiest person alive 😭<br><br>
            I love you endlessly, Sharon Arlin 🧸🌹
          </p>
        </div>
      `;
    }, 1600);
  });

  /* 🌸 Floating hearts & teddies */
  const emojis = ["💖", "💕", "🧸", "💞", "💗"];

  setInterval(() => {
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 6 + Math.random() * 6 + "s";
    bg.appendChild(el);

    setTimeout(() => el.remove(), 12000);
  }, 500);

  /* ✨ Sparkle cursor */
  document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
  });

  /* ⏳ Days since Jan 17, 2025 */
  const startDate = new Date("2025-01-17");
  const today = new Date();
  const daysSince = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  const daysText = document.createElement("p");
  daysText.innerHTML = `💞 We’ve been talking for <b>${daysSince}</b> beautiful days 💞`;
  daysText.style.marginTop = "15px";
  daysText.style.color = "#ff4d6d";
  document.querySelector(".text").appendChild(daysText);

  /* 💘 Countdown to Valentine’s Day */
  const valentines = new Date(`${today.getFullYear()}-02-14`);
  if (today > valentines) valentines.setFullYear(today.getFullYear() + 1);

  const daysLeft = Math.ceil((valentines - today) / (1000 * 60 * 60 * 24));

  const vText = document.createElement("p");
  vText.innerHTML = `💘 ${daysLeft} days until Valentine’s Day 💘`;
  vText.style.color = "#ff4d6d";
  document.querySelector(".text").appendChild(vText);
});
