var chars = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ??";

function random_character(chars) {
    
    return this.chars.substr( Math.floor(Math.random() * 100), 1);
}


var rchar = random_character();
this.chars = this.chars.replace(rchar.toString(), "");

console.log(rchar);
console.log(chars.length);

function play() {
       for (i = 0; i > 100; i++) {
        this.innerHTML = rchar;
      rchar =  random_character(); 
       } console.log("Game over!")
       console.log(chars.length);


}

var squares = document.getElementById("board").getElementsByTagName("td");
for (var i in squares) {
   squares[i].onclick = play;
} 

console.log(rchar);
console.log(chars.length);

// function makeid()
// {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     for( var i=0; i < 1; i++ )
//         text += possible.charAt(Math.floor(Math.random() * possible.length));

//     return text;
// }












// function updateScoreBoard(winnerNum) {
//   if(winnerNum === 1) {
//     var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//   p++;
//   document.getElementById("playerOneScore").innerHTML = p;
// } 
// // else { var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
// //   p++;
// //   document.getElementById("playerTwoScore").innerHTML = p;
// // }
  
// }

// function checkForWinner(){

//     /* Rows */

//     if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s2").innerHTML == 'X' && document.getElementById("s3").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
      
//     }

//      if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s2").innerHTML == 'O' && document.getElementById("s3").innerHTML == 'O'){
//         alert("O WINS!");

//         var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }

//       if(document.getElementById("s4").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s6").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s4").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s6").innerHTML == 'O'){
//         alert("O WINS!");

//           var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }


//       if(document.getElementById("s7").innerHTML == 'X' && document.getElementById("s8").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s7").innerHTML == 'O' && document.getElementById("s8").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
//         alert("O WINS!");

//         var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }


//     /* Colummns */

//     if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s4").innerHTML == 'X' && document.getElementById("s7").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s4").innerHTML == 'O' && document.getElementById("s7").innerHTML == 'O'){
//         alert("O WINS!");
//             var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }

//       if(document.getElementById("s2").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s8").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s2").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s8").innerHTML == 'O'){
//         alert("O WINS!");
//             var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }


//       if(document.getElementById("s3").innerHTML == 'X' && document.getElementById("s6").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s3").innerHTML == 'O' && document.getElementById("s6").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
//         alert("O WINS!");
//         var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }

//     /* Diagonals */

//       if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//     }

//      if(document.getElementById("s3").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s7").innerHTML == 'O'){
//         alert("O WINS!");
//     }

//           if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
//         alert("X WINS!");
//         var p = parseInt(document.getElementById('playerOneScore').innerHTML);
//         p++;
//         document.getElementById("playerOneScore").innerHTML = p;
//        }

//      if(document.getElementById("s3").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s7").innerHTML == 'X'){
//         alert("O WINS!");
//         var p = parseInt(document.getElementById('playerTwoScore').innerHTML);
//         p++;
//         document.getElementById("playerTwoScore").innerHTML = p;
//     }

// /* Restart the game */
//     document.getElementById("restart").onclick = function() {
//         for (var i in squares) {
//            squares[i].innerHTML = '';
//         }
//     }
