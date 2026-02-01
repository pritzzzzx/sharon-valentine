const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background: linear-gradient(135deg, #ffb6c1, #ffd6e0);
      font-family:'Pacifico', cursive;
      text-align:center;
    ">
      <h1 style="font-size:50px; color:#ff4d6d;">YAYYYYY CUTU 💖</h1>
      <p style="font-family:Poppins; font-size:20px;">
        You just made me the happiest person alive 😭💘<br><br>
        I love you so much, wifey Sharon. thank you for everything cutu 🧸🌹
      </p>
    </div>
  `;
});
