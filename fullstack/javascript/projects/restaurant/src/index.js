import "./style.css";

import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

// HELPER FUNCTIONS
function clearPage() {
  document.querySelector("#content").replaceChildren();
}

// BUTTONS EVENT HANDLER
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    clearPage();

    switch (button.innerText) {
      case "Home":
        homePage();
        break;
      case "Menu":
        menuPage();
        break;
      case "About":
        aboutPage();
        break;
    }
  });
});

// ON PAGE LOAD
homePage();
