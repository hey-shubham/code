function checkAnswers() {
  let score = 0;

  const answers = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
  };

  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    let allOptions = document.querySelectorAll(`input[name="${key}"]`);

    allOptions.forEach(opt => {
      let label = opt.parentElement;

      // reset classes (important)
      label.classList.remove("correct", "wrong");

      if (opt.value === answers[key]) {
        label.classList.add("correct");
      }

      if (selected && opt.value === selected.value && opt.value !== answers[key]) {
        label.classList.add("wrong");
      }
    });

    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("result").innerText = `Your Score: ${score}/5`;
}