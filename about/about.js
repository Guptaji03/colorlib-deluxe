// start of counter

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / 100;
    console.log(count,target);
    if (count < target) {
      counter.innerText = count+inc;
      setTimeout(updateCount,20);
      
    }
    else{
      count.innerText = target;
    }
  }
  updateCount(); // start the timeout
});

// end of counter



//Start of animation
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
//end of animation


