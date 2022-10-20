const correctAnswers = ["A", "A", "B", "B", "A"];
const form = document.querySelector(".form-questions");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const displayScore = document.querySelector(".quiz-header > p");
  const scoreCounter = document.querySelector("span.score");
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    } else {
      score -= 7;
    }
  });

  displayScore.style.display = "block";

  let counter = 0;

  const interval = setInterval(() => {
    if (counter !== score) {
      counter++;
      scoreCounter.textContent = `${counter}`;
    } else {
      clearInterval(interval);
    }
  }, 20);

  scrollTo(0, 0);
});
