
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {

        let char;

        for (char in game.activePhrase.phrase) {
            if (game.activePhrase.phrase[char] === " ") {
                $('#phrase ul').append(`<li class="space"> </li>`);
            } else {
                let lowerLetter = game.activePhrase.phrase[char];
                $('#phrase ul').append(`<li class="letter ${lowerLetter}">${lowerLetter}</li>`);
            }
        };
    };

    /**
    * Checks to see if the key clicked matches any chars of randomPhrase
    * @param (string) letter - Letter to check
    */
    checkLetter(index) {

        letter = index.innerHTML;

        let check = ".letter." + letter;

        if ($('.letter').hasClass(letter)) {
            this.showMatchedLetter(check);
            index.classList.add('chosen');
        } else {
            index.classList.add('wrong');
            game.removeALife();
        }

        game.checkForWin();
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        $(letter).addClass('show');
        //  display the char of the corresponding letters check if game is won
    };

}
