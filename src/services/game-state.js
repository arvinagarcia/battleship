export const initializeGameState = () => {
  const mainHomeTop = document.querySelector(".main-home-top");

  if (!mainHomeTop) {
    return;
  }
  
  // function to replace content with "Prepare Your Fleet"
  const updateToPrepareScreen = () => {
    mainHomeTop.innerHTML = `
      <h2 class="prepare-heading">PREPARE YOUR FLEET!</h2>
      <p class="prepare-description">
        Drag your ships to the grid. 
        To rotate a ship, select it and press 'R' on your keyboard.
      </p>
      <button class="start-game-btn">Start Game</button>
    `;

    // attach event listener to the new "Start Game" button
    document.querySelector(".start-game-btn").addEventListener("click", updateToBattleScreen);
  };

  // function to replace content with "Time for Battle"
  const updateToBattleScreen = () => {
    mainHomeTop.innerHTML = `
      <h2 class="in-game-heading">TIME FOR BATTLE!</h2>
      <p class="in-game-description">
        Select a cell on the opponent's grid to attack. You and the opponent will take turns.
        The first player to sink all of their opponent’s ships wins the game! 
      </p>
      <button class="restart-game-btn">Restart Game</button>
    `;

    // attach event listener to the new "Restart Game" button
    document.querySelector(".restart-game-btn").addEventListener("click", updateToPrepareScreen);
  };

  // attach the initial "Start Game" event listener
  document.querySelector(".start-game-btn").addEventListener("click", updateToBattleScreen);
};