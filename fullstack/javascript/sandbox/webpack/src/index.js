import "./style.css";
import { greeting } from "./greeting.js";
console.log(greeting);

import img from "./example.webp";
const image = document.createElement("img");
image.src = img;
document.body.appendChild(image);
