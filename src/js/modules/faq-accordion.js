function faqAccordion() {
  // Slide Down Function START
  function slideDown(element, duration) {
    element.style.display = "block";
    let height = element.offsetHeight;
    element.style.height = 0;
    element.style.overflow = "hidden";

    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let currentHeight = Math.min((progress / duration) * height, height);
      element.style.height = currentHeight + "px";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        element.style.height = "";
      }
    }
    window.requestAnimationFrame(step);
  }
  // Slide Down Function END

  // Sub Menu Slide Up Function START
  function slideUp(element, duration) {
    let height = element.offsetHeight;
    element.style.height = height + "px";
    element.style.overflow = "hidden";

    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      let currentHeight = Math.max(height - (progress / duration) * height, 0);
      element.style.height = currentHeight + "px";
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        element.style.display = "none";
        element.style.height = "";
      }
    }
    window.requestAnimationFrame(step);
  }
  // Sub Menu Slide Up Function END

  // FAQ ACCORDIONS START
  const faqQuestion = document.querySelectorAll(".faq-item");
  faqQuestion.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const answer = button.querySelector(".faq-answer");
      if (answer.style.display === "block" || answer.style.height !== "") {
        slideUp(answer, 300);
        answer.classList.remove("is-active");
        button.classList.remove("is-active");
      } else {
        slideDown(answer, 300);
        answer.classList.add("is-active");
        button.classList.add("is-active");
      }
    });
  });
  // FAQ ACCORDIONS END
}
export default faqAccordion;
