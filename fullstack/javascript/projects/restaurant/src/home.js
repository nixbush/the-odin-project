import bannerImg from "./assets/fried-chicken.jpg";

const content = document.querySelector("#content");

export default function homePage() {
  const banner = document.createElement("div");
  banner.classList.add("banner");
  content.appendChild(banner);

  const descContainer = document.createElement("div");
  descContainer.classList.add("description");

  const tagline = document.createElement("h1");
  tagline.innerText = "Where Code Sizzles & Websites Shine!";
  descContainer.appendChild(tagline);

  const subtext = document.createElement("p");
  subtext.innerText =
    "Your one-stop destination for deliciously crafted JavaScript and CSS files, served hot and ready to enhance your web projects. Whether you're a frontend chef or a backend gourmand, we've got the perfect blend of flavors to spice up your site.";
  descContainer.appendChild(subtext);

  content.appendChild(descContainer);
}
