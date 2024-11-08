const aboutSection = document.querySelector("#about-section");
const portfolioSection = document.querySelector("#portfolio-section");
const skillsSection = document.querySelector("#skills-section");
const contactSection = document.querySelector("#contact-section");
const navBtns = document.querySelectorAll(".nav-btn");
const projects = document.querySelectorAll(".project");
const projectDescDiv = document.querySelector(".project-desc");
const selectElement = document.querySelector("select");
const gallery = document.querySelector(".gallery");

navBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selector = document.querySelector(`#${e.currentTarget.id}`);
    if (selector.id === "about") {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    } else if (selector.id === "portfolio") {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
      });
    } else if (selector.id === "skills") {
      skillsSection.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const projectArray = [];
projects.forEach((project) => {
  projectArray.push(project);
});

const originalGalleryContent = gallery.innerHTML;

const filterProjects = (elementTag) => {
  if (selectElement.value === elementTag) {
    gallery.innerHTML = ""; // Clear the gallery
    gallery.insertAdjacentHTML("beforeend", "<div class='gallery-div'></div>"); // Add a new div container

    const galleryDiv = document.querySelector(".gallery-div");
    const reactArr = projectArray.filter(
      (project) => project.dataset.tag == elementTag
    );

    // Map to get HTML of each filtered element
    const projectHTML = reactArr.map((project) => project.outerHTML).join("");

    // Insert the HTML of filtered projects into galleryDiv
    galleryDiv.insertAdjacentHTML("beforeend", projectHTML);
  }
};
window.addEventListener("load", () => {
  filterProjects(selectElement.value);
});
selectElement.addEventListener("change", () =>
  filterProjects(selectElement.value)
);
projects.forEach((project) => {
  project.addEventListener("mouseover", (e) => {
    projectDescDiv.innerHTML = "";
    const projectName = e.currentTarget.id;
    projectDescDiv.insertAdjacentHTML("beforeend", `<h3>${projectName}</h3>`);
  });
  project.addEventListener("mouseout", (e) => {
    projectDescDiv.innerHTML = ""; // Clear the content or set it back to default
  });
});
