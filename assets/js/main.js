const logo = document.querySelector(".navbar-logo");
const navBar = document.querySelector("header");
const navList = document.querySelectorAll(".navbar-item");
const homeSection = document.querySelector(".home");
const collectionSection = document.querySelector(".collection");
const collectionBox = document.querySelectorAll(".collection-box");
const collectionSubtitle = document.querySelectorAll(".collection-subtitle");
const featuredSection = document.querySelectorAll(".featured");
const sectionTitle = document.querySelectorAll(".section-title");
const offer = document.querySelector(".offer");
const newsLetter = document.querySelector(".newsletter");
const sponsors = document.querySelector(".sponsors");
const sponsorsImg = document.querySelectorAll(".sponsors-logo img");
const featuredBox = document.querySelectorAll(".featured-box");
const newBox = document.querySelectorAll(".new-box");
const a = document.querySelectorAll("a");
const featuredNew = document.querySelectorAll(".featured-new");

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  //Active link
  navLink.forEach((e) => {
    e.classList.remove("active");
  });
  this.classList.add("active");

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
// Dark Theme

logo.addEventListener("click", (e) => {
  const withoutForEachOne = [
    logo,
    offer,
    newsLetter,
    sponsors,
    collectionSection,
  ];
  for (const item of withoutForEachOne) {
    item.classList.toggle("dark-background-one");
  }
  homeSection.classList.toggle("main-dark-class");
  navBar.classList.toggle("dark-background-two");
  navList.forEach((li) => {
    li.lastElementChild.classList.toggle("dark-background-two");
  });
  const withForEachTwo = [
    collectionBox,
    collectionSubtitle,
    featuredBox,
    newBox,
  ];

  for (const items of withForEachTwo) {
    items.forEach((li) => {
      li.classList.toggle("dark-background-two");
    });
  }

  const withForEachOne = [featuredSection, sectionTitle];

  for (const items of withForEachOne) {
    items.forEach((section) => {
      section.classList.toggle("dark-background-one");
    });
  }

  sponsorsImg.forEach((img) => {
    img.classList.toggle("dark-background-filter");
  });
  for (const button of a) {
    if (
      button.textContent === "LA" ||
      button.textContent === "Home" ||
      button.textContent === "Featured" ||
      button.textContent === "New" ||
      button.textContent === "Contact" ||
      button.textContent === "View Collection" ||
      button.textContent === "View All" ||
      button.textContent === "Pricing" ||
      button.textContent === "Free Shipping" ||
      button.textContent === "Gift Cards" ||
      button.className === "footer-social"
    ) {
      continue;
    } else {
      button.classList.toggle("button-class");
    }
  }
  featuredNew.forEach((w) => {
    w.classList.toggle("button-class");
  });
});
