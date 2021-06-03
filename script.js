var rocket = document.querySelector("i");

rocket.addEventListener("mouseenter", () => {
  rocket.classList.toggle("fa-rotate");
  var vw = document.documentElement.clientWidth;
  var vh = document.documentElement.clientHeight;
  var chgLeft = Math.floor(Math.random() * (vw / 2));
  var chgTop = Math.floor(Math.random() * (vh / 2));

  //setting up the random position for mobile view
  if (vw <= 450 || vh <= 800) {
    vw = vw - chgLeft - 200;
    vh = vh - chgTop - 300;
  } else {    //setting up the random position for pc view
    vw = vw - chgLeft - 500;
    vh = vh - chgTop - 400;
  }

  if (vw <= -20 || vh <=0) { //avoiding the rcoket to go beyond the screen dimensions
    vw = 20;
    vh = 10;
  }

  //setting the final vh & vw to the rocket
  rocket.style.top = `${vh}px`;
  rocket.style.left = `${vw}px`;
});
