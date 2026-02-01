document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const music = document.getElementById("bg-music");
  const bg = document.getElementById("floating-bg");
  const textBox = document.querySelector(".text");

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
  // 🎵 Mobile-safe music start
  music.currentTime = 0;
  music.muted = false;
  music.volume = 0.6;

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }

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

  /* 🌸 Floating hearts & teddies (FORCED VISIBLE) */
  const emojis = ["💖", "💕", "🧸", "💞", "💗"];

  setInterval(() => {
    const el = document.createElement("div");
    el.className = "float";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 6 + Math.random() * 6 + "s";
    bg.appendChild(el);

    setTimeout(() => el.remove(), 12000);
  }, 400);

  /* ⏳ Days since Jan 17, 2025 */
  const startDate = new Date("2025-01-17");
  const today = new Date();
  const daysSince = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

  const daysP = document.createElement("p");
  daysP.className = "counter";
  daysP.innerHTML = `💞 We’ve been talking for <b>${daysSince}</b> beautiful days 💞`;
  textBox.appendChild(daysP);

  /* 💘 Valentine’s Day countdown */
  const year =
    today.getMonth() > 1 || (today.getMonth() === 1 && today.getDate() > 14)
      ? today.getFullYear() + 1
      : today.getFullYear();

  const valentines = new Date(year, 1, 14);
  const daysLeft = Math.ceil((valentines - today) / (1000 * 60 * 60 * 24));

  const vP = document.createElement("p");
  vP.className = "counter";
  vP.innerHTML = `💘 ${daysLeft} days until Valentine’s Day 💘`;
  textBox.appendChild(vP);
});
