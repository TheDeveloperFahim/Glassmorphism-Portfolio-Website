//  ------------ About tabs ------------
const tabContainer = document.querySelector(".about-tabs"),
  aboutSecton = document.querySelector("#about-section");

tabContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const targetContent = e.target.getAttribute("data-target");
    aboutSecton.querySelector(".tab-content.active").classList.remove("active");
    aboutSecton.querySelector(targetContent).classList.add("active");
  }
});

//  ------------ portfolio item deatils popup  ------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopUp();

    portfolioItemDetails(e.target.parentElement);
  }
});

const togglePortfolioPopUp = () => {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
};

const closeBtn = document.querySelector(".pp-close");
closeBtn.addEventListener("click", togglePortfolioPopUp);

// Hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopUp();
  }
});

const portfolioItemDetails = (portfolioItem) => {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector("description").innerHTML;
};
