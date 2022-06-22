let collapseLink = document.querySelector("#collapseLink");
let navLinks = document.querySelectorAll("#collapseLink li");
let menuIcon = document.querySelector("#menuIcon");

// Toggle Menu Icon and Cross Icons alternatively.
function clickIcon() {
  collapseLink.classList.toggle("hidden");
}

// Make the navigation links hidden when a navlink is clicked.
function makeHiddenNav() {
  if (collapseLink.classList.contains("absolute")) {
    collapseLink.classList.add("hidden");
  }
}

// Attaching the listeners.
menuIcon.addEventListener("click", clickIcon);
navLinks.forEach((nav) => {
  nav.addEventListener("click", makeHiddenNav);
});
