
const cards = document.querySelectorAll(".animate");

const options = {
  //   rootMargin: "0px 0px 25px 0px",
  threshold: 0.5,
};
const socialObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "transitionIn 0.75s ease-out";
    } 
  });
}, options);

cards.forEach((card) => {
  socialObserver.observe(card);
});
