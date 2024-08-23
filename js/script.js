const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".our_erc_question").forEach((question) => {
  question.addEventListener("click", () => {
    const span = question.querySelector("span");
    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
      span.classList.remove("active");
    } else {
      document.querySelectorAll(".our_erc_answer").forEach((ans) => {
        ans.style.display = "none";
      });
      document.querySelectorAll(".our_erc_question span").forEach((sp) => {
        sp.classList.remove("active");
      });

      answer.style.display = "block";
      span.classList.add("active");
    }
  });
});

document.querySelectorAll("#faq .item h3").forEach((item) => {
  item.addEventListener("click", () => {
    const siblings = item.parentElement.querySelectorAll("p, ul");
    const icon = item.querySelector("span");

    siblings.forEach((content) => {
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
      } else {
        content.style.display = "block";
        icon.textContent = "-";
      }
    });
  });
});
