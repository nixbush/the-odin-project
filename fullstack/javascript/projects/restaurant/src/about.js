export default function aboutPage() {
  // NOTE: Too damn lazy to use javascript to make elements. Just dumping it all here seems to work
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  aboutDiv.innerHTML = `
    <h1>About WEBCOOKER</h1>
    <p>
      Welcome to WEBCOOKER, a fun and creative practice project made by
      PERSON.
    </p>
    <h2>What is WEBCOOKER?</h2>
    <p>
      WEBCOOKER is a playful take on web development, serving up JavaScript
      and CSS like a fine restaurant. It’s a project built purely for learning
      and experimentation, with no commercial intent.
    </p>
    <h2>Why was this made?</h2>
    <p>
      This project was created to practice HTML, CSS, and JavaScript in a
      unique and entertaining way. The goal is to improve coding skills while
      having fun designing a fictional restaurant for developers.
    </p>
    <h2>What’s next?</h2>
    <p>
      More dishes, better layouts, and maybe even some interactive features.
      This project will remain as is, so that it showcases my milestone in my
      learning.
    </p>
    <p>Thanks for stopping by, and happy coding!</p>
  `;
  document.querySelector("#content").appendChild(aboutDiv);
}
