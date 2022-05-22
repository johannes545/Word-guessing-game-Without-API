/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

 document.getElementById('btn__reset').addEventListener('click', () => {
   game = new Game;
   game.startGame();
 });

 for(let index = 0; index < keys.length; index++) {
   keys[index].addEventListener('click', () => {
     game.handleInteraction(keys[index]);
   });
}
