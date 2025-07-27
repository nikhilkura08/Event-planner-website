// script.js

function toggleMenu() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("show");
}
function toggleMenu() {
  const menuBox = document.getElementById("menu-box");
  if (menuBox.style.display === "block") {
    menuBox.style.display = "none";
  } else {
    menuBox.style.display = "block";
  }
}
function showAbout() {
  const aboutSection = document.getElementById("about-section");
  if (aboutSection.style.display === "block") {
    aboutSection.style.display = "none";
  } else {
    aboutSection.style.display = "block";
    // Optional: scroll to it
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
}
function toggleContact() {
  const contactBox = document.getElementById("contact-box");
  if (contactBox.style.display === "block") {
    contactBox.style.display = "none";
  } else {
    contactBox.style.display = "block";
  }
}
function togglePackage() {
  const packageBox = document.getElementById("packages");
  if (packageBox.style.display === "block") {
    packageBox.style.display = "none";
  } else {
    packageBox.style.display = "block";
    packageBox.scrollIntoView({ behavior: "smooth" });
  }
}
