let hero = document.querySelector("main");
let image = [
  "url(https://s3.amazonaws.com/shecodesio-production/uploads/files/000/032/009/original/SLIDES-2.png?1650181019)",
  "url(http://s3.amazonaws.com/shecodesio-production/uploads/files/000/031/884/original/SLIDES.png?1650039462)",
];
setInterval(function back() {
  let bg = image[Math.floor(Math.random() * image.length)];
  let changeBackgrd =
    "<main class='hero' style=' background-image: " + bg + ";'>";
  hero.innerHTML = changeBackgrd;
  console.log(bg);
}, 2000);
//background: no-repeat center center;
//  background-size: cover;

let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("bl-shoots-item");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "inline-block";
}

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
