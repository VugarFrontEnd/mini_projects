const body = document.body;

body.addEventListener("click", (e) => {
  const target = e.target;
  const ul = document.querySelector(".unordered-list");

  if (target.matches("i.fa-bars")) {
    ul.style.transform = "scaleX(1)";
  } else if (
    target.matches("i.fa-xmark") ||
    ((target.matches("i.fa-moon") || target.matches("i.fa-sun")) &&
      window.innerWidth < 930)
  ) {
    ul.style.transform = "scaleX(0)";
  }

  // Toggle ligh\dark theme

  const moon = document.querySelector("i.fa-moon");
  const sun = document.querySelector("i.fa-sun");
  const ulAnchorTags = document.querySelectorAll("li a");
  const footerContainer = document.querySelector("footer.footer");
  const cards = document.querySelectorAll("div.cards .card");
  const paras = document.querySelectorAll("p");
  const cardHeadings = document.querySelectorAll("div.card h2");
  const heroMainHeading = document.querySelector("div.text-content h1");
  const footerHeadings = document.querySelectorAll("div.link h5");
  const partners = document.querySelectorAll("div.partners-container img");
  const socials = document.querySelectorAll("div.socials i");
  const footerAddress = document.querySelector("address.footer-address");
  const socialsHeading = document.querySelector("div.socials h5");
  const newsletterHeading = document.querySelector("section.newsletter h4");
  const designHeading = document.querySelector("section.design-things h2");
  const teamworkHeading = document.querySelector("section.teamwork h2");
  const menuBar = document.querySelector("i.fa-bars");
  const heroCornerPattern = document.querySelector("section.hero-page > img");
  if (target.matches("i.fa-moon")) {
    body.style.background = "#222";
    moon.style.opacity = "0";
    sun.style.opacity = "1";
    ulAnchorTags.forEach((tag) => {
      tag.style.color = "#fff";
    });
    footerContainer.style.background = "#444";
    cards.forEach((card) => {
      card.style.background = "#444";
    });
    paras.forEach((para) => {
      para.style.color = "#fff";
    });
    cardHeadings.forEach((cardHeading) => {
      cardHeading.style.color = "#fff";
    });
    heroMainHeading.style.color = "#ddd";
    footerHeadings.forEach((footerHeading) => {
      footerHeading.style.color = "#ddd";
    });
    partners.forEach((partner) => {
      partner.style.filter = "brightness(0) invert(1)";
    });
    socials.forEach((social) => {
      social.style.filter = "brightness(0) invert(1)";
    });
    footerAddress.style.color = "#ddd";
    socialsHeading.style.color = "#ddd";
    newsletterHeading.style.color = "#ddd";
    designHeading.style.color = "#ddd";
    teamworkHeading.style.color = "#ddd";
    menuBar.style.color = "#ddd";
    heroCornerPattern.style.opacity = "1";
  }
  if (target.matches("i.fa-sun")) {
    body.style.background = "#fff";
    sun.style.opacity = "0";
    moon.style.opacity = "1";
    ulAnchorTags.forEach((tag) => {
      tag.style.color = "var(--primaryFontColor)";
    });
    footerContainer.style.background = "hsl(165, 70%, 91%)";
    cards.forEach((card) => {
      card.style.background = "hsl(165, 70%, 91%)";
    });
    paras.forEach((para) => {
      para.style.color = "var(--secondarFontColor)";
    });
    cardHeadings.forEach((cardHeading) => {
      cardHeading.style.color = "var(--primaryFontColor)";
    });
    heroMainHeading.style.color = "var(--primaryFontColor)";
    footerHeadings.forEach((footerHeading) => {
      footerHeading.style.color = "var(--primaryFontColor)";
    });
    partners.forEach((partner) => {
      partner.removeAttribute("style");
    });
    socials.forEach((social) => {
      social.removeAttribute("style");
    });
    footerAddress.removeAttribute("style");
    socialsHeading.removeAttribute("style");
    newsletterHeading.removeAttribute("style");
    designHeading.removeAttribute("style");
    teamworkHeading.removeAttribute("style");
    menuBar.removeAttribute("style");
    heroCornerPattern.removeAttribute("style");
  }
});

// Newsletter input validation

const emailInput = document.querySelector("#newsletter-email");

emailInput.addEventListener("keyup", () => {
  const value = emailInput.value.trim();
  if (value.includes("@")) {
    emailInput.setAttribute("class", "success");
  } else if (value.length < 1) {
    emailInput.removeAttribute("class");
  } else {
    emailInput.setAttribute("class", "error");
  }
});

// Go to top -- onscroll function

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  const doc = document.documentElement;
  const scrollTopIcon = document.querySelector(".fa-arrow-up");
  if (doc.scrollTop > 500) {
    scrollTopIcon.style.opacity = "1";
  } else {
    scrollTopIcon.style.opacity = "0";
  }
}
