/*
 * tic tac toe

madafaka what do i need?
- a gameboard to track state
- players
- check winner

flow of deez nuts:

while game is running:
   take user input A
   take user input B

   if winner either madafaka:
      kill the game

output the winner

 */

const Game = (function() {
   const board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
   ];
   const cells = document.querySelectorAll('.cell');

   function customAlert(message) {
      requestAnimationFrame(() => {
         setTimeout(() => {
            alert(message);
         });
      });
   }

   function handleMove(index) {
      index -= 1;
      const x = Math.floor(index / board.length);
      const y = index % board.length;
      return { x, y };
   }

   function displayUpdate(cell, player) {
      cell.textContent = player;
      cell.classList.add(`${player}-occupied`);
   }

   function displayEnd() {
      cells.forEach(cell => {
         if (cell.textContent === '') {
            cell.classList.add('empty');
         }
      });
   }

   // NOTE: Return 0 when nothing. return 1 if won, -1 if tie
   function checkGameStatus(move, player) {
      if (!board.map(row => row.includes(null)).includes(true)) {
         // For each row, check if that row still has empty slot then make that as the new value
         // Then, for the new list, check if it does not includes `true` or an empty cell
         return -1;
      }

      // Stolen from https://stackoverflow.com/a/1058804
      let col = 0;
      let row = 0;
      let diag = 0;
      let rdiag = 0;
      for (let i = 0; i < board.length; ++i) {
         if (board[i][move.x] === player) col++;
         if (board[move.y][i] === player) row++;
         if (board[i][i] === player) diag++;
         if (board[i][board.length - i - 1] === player) rdiag++;
      }
      if (
         col === board.length ||
         row === board.length ||
         diag === board.length ||
         rdiag === board.length
      ) {
         return 1;
      }

      return 0;
   }

   function run() {
      let currentPlayer = 'X';
      cells.forEach(cell => {
         // Actual game code, only check when click
         cell.addEventListener('click', () => {
            const move = handleMove(cell.dataset.index);
            if (board[move.y][move.x] !== null) {
               return;
            }

            board[move.y][move.x] = currentPlayer;
            displayUpdate(cell, currentPlayer);

            const status = checkGameStatus(move, currentPlayer);
            if (status > 0) {
               customAlert(`Player ${currentPlayer} won!`);
               displayEnd();
            } else if (status < 0) {
               customAlert('Both players tied');
               displayEnd();
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
         });
      });
   }

   return {
      run,
   };
})();

Game.run();
