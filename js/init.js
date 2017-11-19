// Materialize Design
(function($) {
  $(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// Scroll Spy for scrolling smoothly
$(document).ready(function() {
  $(".scrollspy").scrollSpy();
});

// Adding 'active' class for selected Project divs - to highlight
// Showing projects according to selection
window.onload = function() {
  document.querySelector("body").addEventListener("click", function(e) {
    if (
      e.target.parentElement.parentElement.className ==
      "right hide-on-med-and-down projectMenu"
    ) {
      if (e.target.className === "allNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "nodeNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "reactNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "rubyNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      } else if (e.target.className === "javascriptNav") {
        // Only selected projects
        showProject(e.target.className);

        // removing all other 'active' classes
        removeClass(e.target.parentElement);
      }
    }
  });
};

// Remove active class function
function removeClass(current) {
  let menuChidlren = document.querySelectorAll(".projectMenu LI");
  // Removing every className 'active'
  for (let i = 0; i < menuChidlren.length; i++) {
    menuChidlren[i].classList.remove("active");
  }
  // Only adding 'active' to current class
  current.classList.add("active");
}

// Projects showing by selection
function showProject(eNav) {
  let project = document.querySelectorAll(".projectDivs");
  // Showing All Projects
  project.forEach(function(e, i) {
    // To make new selection each time.
    e.style.display = "none";

    if (eNav == "allNav") {
      if (e.className.includes("all")) e.style.display = "flex";
    } else if (eNav == "nodeNav") {
      if (e.className.includes("node")) e.style.display = "flex";
    } else if (eNav == "reactNav") {
      if (e.className.includes("react")) e.style.display = "flex";
    } else if (eNav == "rubyNav") {
      if (e.className.includes("ruby")) e.style.display = "flex";
    } else if (eNav == "javascriptNav") {
      if (e.className.includes("javascript")) e.style.display = "flex";
    }
  }, this);
}
