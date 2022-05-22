

 // Global Variables
let randomPhrase;
let letter;
let gameStatus;
let randomNum;
let phrase;

// Document Selectors
let gameOverMessage = $('#game-over-message');
let keys = $('.key');
let lives = $('.tries img');

// Messages
const wonMessage = 'Congratulations You Have Won!!';
const lostMessage = 'Sorry you have run out of lives. Please Try Again!';

// Opening to Game Class
class Game{
 constructor(){
   this.missed = 0;
   this.phrases = [
      new Phrase ("Curiosity Killed The Cat"),
      new Phrase ("A Dime a Dozen"),
      new Phrase ("Piece of Cake"),
      new Phrase ("Close But No Cigar"),
      new Phrase ("Cup of Joe")
    ];
   this.activePhrase = null;
 };

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    return this.phrases[Math.floor( Math.random() * this.phrases.length)];
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  * hides the overlay sets the game-over-message to empty
  * sends new random phrase to the addPhraseToDisplay()
  **/
  startGame(){
    $('#overlay').hide();
    this.resetGame();
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameStatus){
    if (gameStatus === 'won'){
      gameOverMessage.append(wonMessage);
      $('#overlay').show().addClass('win');
    } else if(gameStatus === 'lost') {
      gameOverMessage.append(lostMessage);
      $('#overlay').show().addClass('lose');
    }
  };

  /**
  * Handles user interaction
  * @param {string} innerHTML of keyboard buttons
  */
  handleInteraction(index){
    this.activePhrase.checkLetter(index);
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */

  checkForWin(){
    // this is a missed counter for a game over on loss of lives
    if (this.missed == 5){
      setTimeout(game.gameOver, 500, 'lost' );
    } else if ($('.letter.show').length == $('.letter').length){
    setTimeout(game.gameOver, 500, 'won' );
    }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeALife(){
    //  change liveHeart.png to lostHeart.png
    lives[this.missed].src='images/lostHeart.png';
    this.missed ++;
  };

  resetGame(){
    for(let i = 0; i < lives.length; i++){
      lives[i].src='images/liveHeart.png';
    }

    $('#overlay').removeClass('lose win');
    $('#game-over-message').empty();
    $('#phrase ul').empty();
    $('.key').removeClass('chosen wrong');
  };

}