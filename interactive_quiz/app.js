const correctAnswers = ["A", "B", "A", "A", "B"];
const form = document.querySelector(".questionary-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
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
    }
  });
  result.classList.remove("display-none");

  let output = 0;
  const counter = setInterval(() => {
    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
      result.querySelector("span").textContent = `${output}`;
    }
  }, 20);

  scrollTo(0, 0);
});
