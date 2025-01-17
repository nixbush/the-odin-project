window.onload = function () {
   const container = document.querySelector('.container');
   createSquares(container, 16);
};

const resizeButton = document.querySelector('#resize');
const resetButton = document.querySelector('#reset');

resizeButton.addEventListener('click', function () {
   const container = document.querySelector('.container');
   removeSquares(container);

   const newSize = document.querySelector('#size').value.trim();
   if (!newSize || isNaN(newSize) || +newSize > 100) {
      alert('You need to enter a valid size!');
      return;
   }

   createSquares(container, newSize);
});

resetButton.addEventListener('click', function () {
   let squares = document.querySelectorAll('.square');
   squares.forEach(function (square) {
      square.style.backgroundColor = 'white';
   });
});

function createSquares(container, length) {
   const squareWidth = container.clientWidth / length;
   const squareHeight = container.clientHeight / length;

   for (let s = 0; s < length * length; ++s) {
      let square = document.createElement('div');
      container.appendChild(square);
      square.className = 'square';
      square.style.width = `${squareWidth}px`;
      square.style.height = `${squareHeight}px`;
      square.style.backgroundColor = 'white';
      square.style.opacity = '0.1';

      square.addEventListener('mouseover', function () {
         if (square.style.backgroundColor === 'white') {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
         } else {
            square.style.opacity = `${+square.style.opacity + 0.1}`;
         }
      });
   }
}

function removeSquares(container) {
   container.replaceChildren();
}
