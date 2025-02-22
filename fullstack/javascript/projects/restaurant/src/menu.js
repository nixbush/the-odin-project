import burgerSrc from "./assets/burger-fries.jpg";
import chickenSrc from "./assets/roast-chicken.jpg";

const content = document.querySelector("#content");

function createCard(image, title, description) {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  const menuImg = document.createElement("img");
  menuImg.src = image;
  menuImg.alt = "Image of food. Don't ask me what it is.";
  card.appendChild(menuImg);

  const menuDesc = document.createElement("div");
  menuDesc.classList.add("menu-description");

  const descTitle = document.createElement("h2");
  descTitle.innerText = title;
  menuDesc.appendChild(descTitle);

  const descEntry = document.createElement("p");
  descEntry.innerText = description;
  menuDesc.appendChild(descEntry);

  card.appendChild(menuDesc);
  return card;
}

export default function menuPage() {
  const title = document.createElement("h1");
  title.innerText = "Menu";
  content.appendChild(title);

  const cardList = document.createElement("div");
  cardList.classList.add("menu-list");

  const burgerCard = createCard(
    burgerSrc,
    "Burger w/ Fries",
    "Succosus patty sibilat, cheddar liquefactum stillat. Crispus lactuca, tosta brioche, lardum fumosum. Aureae frictae crispant, perfecte sale aspersae. Quisque morsus—satisfaciens et inevitabilis.",
  );
  cardList.appendChild(burgerCard);

  const chickenCard = createCard(
    chickenSrc,
    "Poulet Rôti",
    "Croustillant à l’extérieur, juteux à l’intérieur, imprégné d’épices et rôti à la perfection. Pas de chichis, pas de complications. Prenez une bouchée, laissez les saveurs parler. Mangez. Juste mangez.",
  );
  cardList.appendChild(chickenCard);

  content.appendChild(cardList);
}
