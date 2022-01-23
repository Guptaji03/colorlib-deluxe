// adding Rooms in rooms section

var rooms = [
  {
    name: "Suite Room",
    cost: "120.00",
    Max: "3 Persons",
    Size: "45 m2",
    View: "Sea View",
    Bed: "1",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-1.jpg.pagespeed.ic.0q4Bp6Qeo7.webp",
  },

  {
    name: "Family Room",
    cost: "20.00",
    Max: " 3 Persons",
    Size: " 45 m2",
    View: "Sea View",
    Bed: "1",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-2.jpg.pagespeed.ic.qQEQzEZcIj.webp",
  },

  {
    name: "Deluxe Room",
    cost: "150.00",
    Max: "5 Persons",
    Size: " 45 m2",
    View: " Sea View",
    Bed: " 2",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp",
  },

  {
    name: "Classic Room",
    cost: "130.00",
    Max: " 5 Persons",
    Size: " 45 m2",
    View: " Sea View",
    Bed: " 2",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-4.jpg.pagespeed.ic.5v9gH2L7pP.webp",
  },
  {
    name: "Superior Room",
    cost: "300.00",
    Max: " 6 Persons",
    Size: "45 m2",
    View: " Sea View",
    Bed: " 3",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-5.jpg.pagespeed.ic.teuAgd-yoQ.webp",
  },

  {
    name: "Luxury Room",
    cost: "500.00",
    Max: " 5 Persons",
    Size: " 45 m2",
    View: " Sea View",
    Bed: " 2",
    image:
      "https://preview.colorlib.com/theme/deluxe/images/xroom-6.jpg.pagespeed.ic.KiztQkl1vI.webp",
  },
];

function appendRooms(data) {
  data.forEach((room) => {
    var div = document.createElement("div");
    div.setAttribute("class", "room-card animate");
    var img = document.createElement("img");
    img.setAttribute("class", "room-img");
    var name = document.createElement("p");
    name.setAttribute("class", "bigsizename");
    var price = document.createElement("p");
    price.setAttribute("class", "pricestyle");

    var specifications = document.createElement("div");
    specifications.setAttribute("class", "room-spec");
    var max = document.createElement("div");
    var size = document.createElement("div");
    var view = document.createElement("div");
    var bed = document.createElement("div");
    var line = document.createElement("hr");

    max.setAttribute("class", "item");
    size.setAttribute("class", "item");
    view.setAttribute("class", "item");
    bed.setAttribute("class", "item");

    var costdiv = document.createElement("div");
    costdiv.setAttribute("class", "cost-div");
    var pernight = document.createElement("p");
    pernight.setAttribute("class", "pricepernight");

    line.setAttribute("class", "horizontal");

    var button = document.createElement("button");
    button.setAttribute("class", "booknow");

    img.src = room.image;
    name.innerText = room.name;

    price.innerHTML = "$" + room.cost;

    pernight.innerHTML = "&nbsp;&nbsp;per night";

    costdiv.append(price, pernight);

    max.innerHTML = "<span style='color:#8d703b'>Max:</span>" + room.Max;
    size.innerHTML = "<span style='color:#8d703b'>Size:</span>" + room.Size;
    view.innerHTML = "<span style='color:#8d703b'>View:</span>" + room.View;
    bed.innerHTML = "<span style='color:#8d703b'>Bed:</span>" + room.Bed;

    button.innerHTML =
      "<a class = 'book' href ='#'>View Room Details <i class='fas fa-long-arrow-alt-right'></i></a>";

    specifications.append(max, size, view, bed);
    div.append(img, name, costdiv, line, button);

    document.querySelector(".rooms-div").append(div);
  });
}
appendRooms(rooms);

//

// var bgCarousel = document.querySelector(".change-bg");

// function changeBg() {
//     bgCarousel.classList.toggle("background-carousel");
//   bgCarousel.classList.toggle("background-carousel1");
// //   bgCarousel.style.animation = "animation: imgBg 2s ease-in;";
//   setTimeout(changeBg, 5000);
// }

// setTimeout(changeBg, 5000);

//Start of animation
const cards = document.querySelectorAll(".animate");

const options = {
  // rootMargin: "0px 0px 50% 0px",
  threshold: 0.5,
};
const socialObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = "transitionIn 0.75s ease-out";
      entry.target.style.opacity = "1";
    }
  });
}, options);

cards.forEach((card) => {
  socialObserver.observe(card);
});
//end of animation

// start of counter

const counters = document.querySelectorAll(".counter");



counters.forEach((counter) => {
const updateCount = () => {
  const target = +counter.getAttribute("data-target");
  const count = +counter.innerText;

  const inc = target / 100;

  if (count < target) {
    counter.innerText = count+inc;
    setTimeout(updateCount,50);
    
  }
  else{
    count.innerText = target;
  }
}
updateCount(); // start the timeout
});

// end of counter

// //Start of animation_counter
// const counter_numbers = document.querySelectorAll(".animate_counter");


// const counterObserver = new IntersectionObserver((entries) => {

//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.style.animation = "transitionIn 0.75s ease-out";
//       entry.target.style.opacity = "1";
//       startCounter();
//     }
//   });
// }, options);

// counter_numbers.forEach((counter) => {
//   counterObserver.observe(counter);
// });
//end of animation_counter
