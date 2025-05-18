document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll("nav button");
  const tapBtn = document.getElementById("tap-btn");
  const scoreDisplay = document.getElementById("score");
  const taskButton = document.getElementById("task-btn");

  let score = parseInt(localStorage.getItem("score")) || 0;
  scoreDisplay.innerText = score;

  // Navigation
  navButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      sections[index].classList.add("active");
    });
  });

  // Tap
  tapBtn.addEventListener("click", () => {
    score += 1;
    localStorage.setItem("score", score);
    scoreDisplay.innerText = score;
  });

  // Task simulation: подписка на канал
  taskButton.addEventListener("click", () => {
    // Здесь можно будет добавить серверную проверку
    const subscribed = confirm("Вы подписаны на канал?");
    if (subscribed) {
      score += 200;
      localStorage.setItem("score", score);
      scoreDisplay.innerText = score;
      alert("Вы получили 200 поинтов!");
    }
  });
});
