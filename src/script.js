const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

moonIcon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
};

sunIcon.onclick = function () {
  document.body.classList.remove("dark-theme");
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
};

const popupButton = document.querySelectorAll(".popup-btn");
const popupOverlay = document.getElementById("popup-overlay");
const popupBox = document.getElementById("popup-box");
const cancelButton = document.getElementById("cancel-btn");

popupButton.forEach((button) => {
  button.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
    cancelButton.style.display = "block";
  });
});
cancelButton.addEventListener("click", function () {
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  cancelButton.style.display = "none";
});

popupOverlay.addEventListener("click", function () {
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  cancelButton.style.display = "none";
});

const homePage = document.getElementById("home-page");
const contactPage = document.getElementById("contact-page");
const homeButtons = document.querySelectorAll(".home-button");
const contactButtons = document.querySelectorAll(".contact-button");
const profiloPage = document.getElementById("profolio-page");
const profiloButton = document.querySelectorAll(".profolio-btn");
const mailPage = document.getElementById("mail-page");
const mailButton = document.querySelectorAll(".mail-btn");
const blogPage = document.getElementById("blog-page");
const blogButton = document.querySelectorAll(".blog-btn");

contactButtons.forEach((button) => {
  button.addEventListener("click", function () {
    homePage.style.display = "none";
    contactPage.style.display = "block";
    profiloPage.style.display = "none";
    mailPage.style.display = "none";
    blogPage.style.display = "none";
    button.style.backgroundColor = "rgb(250 204 21)";
    homeButtons.forEach((homeButton) => {
      homeButton.style.backgroundColor = "";
    });
    profiloButton.forEach((profiloButton) => {
      profiloButton.style.backgroundColor = "";
    });
    mailButton.forEach((mailButton) => {
      mailButton.style.backgroundColor = "";
    });
    blogButton.forEach((blogButton) => {
      blogButton.style.backgroundColor = "";
    });
  });
});

homeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    homePage.style.display = "block";
    contactPage.style.display = "none";
    profiloPage.style.display = "none";
    mailPage.style.display = "none";
    blogPage.style.display = "none";
    button.style.backgroundColor = "rgb(250 204 21)";
    contactButtons.forEach((contactButtons) => {
      contactButtons.style.backgroundColor = "";
    });
    profiloButton.forEach((profiloButton) => {
      profiloButton.style.backgroundColor = "";
    });
    mailButton.forEach((mailButton) => {
      mailButton.style.backgroundColor = "";
    });
    blogButton.forEach((blogButton) => {
      blogButton.style.backgroundColor = "";
    });
  });
});
profiloButton.forEach((button) => {
  button.addEventListener("click", function () {
    profiloPage.style.display = "block";
    homePage.style.display = "none";
    contactPage.style.display = "none";
    mailPage.style.display = "none";
    blogPage.style.display = "none";
    button.style.backgroundColor = "rgb(250 204 21)";
    contactButtons.forEach((contactButtons) => {
      contactButtons.style.backgroundColor = "";
    });
    mailButton.forEach((mailButton) => {
      mailButton.style.backgroundColor = "";
    });
    blogButton.forEach((blogButton) => {
      blogButton.style.backgroundColor = "";
    });
    homeButtons.forEach((homeButton) => {
      homeButton.style.backgroundColor = "";
    });
  });
});
mailButton.forEach((button) => {
  button.addEventListener("click", function () {
    mailPage.style.display = "block";
    profiloPage.style.display = "none";
    homePage.style.display = "none";
    contactPage.style.display = "none";
    blogPage.style.display = "none";
    button.style.backgroundColor = "rgb(250 204 21)";
    blogButton.forEach((blogButton) => {
      blogButton.style.backgroundColor = "";
    });
    homeButtons.forEach((homeButton) => {
      homeButton.style.backgroundColor = "";
    });
    contactButtons.forEach((contactButtons) => {
      contactButtons.style.backgroundColor = "";
    });
    profiloButton.forEach((profiloButton) => {
      profiloButton.style.backgroundColor = "";
    });
  });
});
blogButton.forEach((button) => {
  button.addEventListener("click", function () {
    blogPage.style.display = "block";
    mailPage.style.display = "none";
    profiloPage.style.display = "none";
    homePage.style.display = "none";
    contactPage.style.display = "none";
    button.style.backgroundColor = "rgb(250 204 21)";
    homeButtons.forEach((homeButton) => {
      homeButton.style.backgroundColor = "";
    });
    contactButtons.forEach((contactButtons) => {
      contactButtons.style.backgroundColor = "";
    });
    profiloButton.forEach((profiloButton) => {
      profiloButton.style.backgroundColor = "";
    });
    mailButton.forEach((mailButton) => {
      mailButton.style.backgroundColor = "";
    });
  });
});

// Profolio page

const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

const imgHover = document.querySelector(".img-hov");
const imgHover1 = document.querySelector(".img-hov1");
const imgHover2 = document.querySelector(".img-hov2");
const imgHover3 = document.querySelector(".img-hov3");
const imgHover4 = document.querySelector(".img-hov4");
const imgHover5 = document.querySelector(".img-hov5");
const textYellow = document.querySelector(".txt-yel");
const textYellow1 = document.querySelector(".txt-yel1");
const textYellow2 = document.querySelector(".txt-yel2");
const textYellow3 = document.querySelector(".txt-yel3");
const textYellow4 = document.querySelector(".txt-yel4");
const textYellow5 = document.querySelector(".txt-yel5");

imgHover.addEventListener("mouseover", function () {
  textYellow.style.color = "rgb(245, 158, 11)";
});

imgHover.addEventListener("mouseout", function () {
  textYellow.style.color = "";
});

imgHover1.addEventListener("mouseover", function () {
  textYellow1.style.color = "rgb(245, 158, 11)";
});

imgHover1.addEventListener("mouseout", function () {
  textYellow1.style.color = "";
});
imgHover2.addEventListener("mouseover", function () {
  textYellow2.style.color = "rgb(245, 158, 11)";
});

imgHover2.addEventListener("mouseout", function () {
  textYellow2.style.color = "";
});
imgHover3.addEventListener("mouseover", function () {
  textYellow3.style.color = "rgb(245, 158, 11)";
});

imgHover3.addEventListener("mouseout", function () {
  textYellow3.style.color = "";
});
imgHover4.addEventListener("mouseover", function () {
  textYellow4.style.color = "rgb(245, 158, 11)";
});

imgHover4.addEventListener("mouseout", function () {
  textYellow4.style.color = "";
});
imgHover5.addEventListener("mouseover", function () {
  textYellow5.style.color = "rgb(245, 158, 11)";
});

imgHover5.addEventListener("mouseout", function () {
  textYellow5.style.color = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const homeButtons = document.querySelectorAll(".home-button");
  homeButtons.forEach(
    (button) => (button.style.backgroundColor = "rgb(250 204 21)")
  );
});
