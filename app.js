const questions = document.querySelectorAll('.question');
const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
  const originalFontWeight = window.getComputedStyle(question).getPropertyValue('font-weight');

  question.addEventListener('click', () => {

    // Close any open answers
    answers.forEach((answer, answerIndex) => {
      if (answer.classList.contains('active') && answerIndex !== index) {
        answer.classList.remove('active');
        arrows[answerIndex].classList.remove('arrow-up');
        questions[answerIndex].style.fontWeight = originalFontWeight;
      }
    });

    // Open the clicked answer
    arrows[index].classList.toggle('arrow-up');
    answers[index].classList.toggle('active');

    // Change font weight of the clicked question
    question.style.fontWeight = 'bold';
    
    // Return font weight to original value after the answer is closed
    if (!answers[index].classList.contains('active')) {
      question.style.fontWeight = originalFontWeight;
    }
  });
});
