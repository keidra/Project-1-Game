Word Scramble

![Alt text](Screen1.png?raw=true "Screenshot 1")

-------------------------------------------------------------------------------------------------------------------
Word Scramble - Version 1 
-------------------------------------------------------------------------------------------------------------------

This is a simple word scramble game for 1 player. The player clicks on a tile to populate a line of scrambled letters, then the player must then proceed to unscramble the letters. 

Three buttons are provided on the screen that enable the player to view the rules, get a hint, and proceed to the next word. These buttons are: Rules, Hint, and Next Word.

After the player solves the word, it is then placed into a word list called 'Words Guessed' on the left side of the page. The players score is also stored an increased at this point, which is print under the 'Score' on the right of the page. 

-------------------------------------------------------------------------------------------------------------------
Issues/Unsolved Problems
-------------------------------------------------------------------------------------------------------------------

The jQuery .sortable does not function properly in the Firefox browser. I was unable to find a solution to correct this, my research provided that it may be a bug with Firefox.

When resizing the page to a smaller size, the page is not responsive. I had an faced some issues getting this to function. When displayed in full-screen, the game is aligned properly. 

-------------------------------------------------------------------------------------------------------------------
Process 
-------------------------------------------------------------------------------------------------------------------

The 'shuffle function' String.prototype.shuffle = function () was the first step in the process of creating the base of the game. This function shuffles a string of letters. 

The next function, function getRandomInt(min, max) {
return Math.floor(Math.random()  - is used to grab a random word from the wordbank array. 

The random word is then scrambled, and then the function play() is run, and the word is placed into a <td>. 

A a tile on the page is clicked, .onclick is run, and excutes the shuffle function on each click. Also enabled on this click, is .sortable, which enables the drag & drop capablity for the tiles. 

A .onclick is enabled for the Reset, Hint, and Next Word buttons. 

A .append is used to output the correctly unscrambled letter, after the player gets it correct. It is then placed into a li item inside an ul. An alert generates upon the correct answer being reached using swal();.

'Score++' is used to incremented the number of correct words, and is stored with .text(score).
-------------------------------------------------------------------------------------------------------------------


