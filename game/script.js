// function randomString() {
//     var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var string_length = 1;
//     var randomstring = '';
//     for (var i = 0; i < string_length; i++) {
//         var rnum = Math.floor(Math.random() * chars.length);
//         randomstring += chars.substring(rnum,rnum+1);
//     }
//     document.randform.randomfield.value = randomstring;
// }


// var words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function next() {
//   turn = turn === 'A';
// }
// function play () {
//     if (this.innerHTML === '') {
//         this.innerHTML = turn;
//         checkForWinner();
//         next();
//     }
// }

// var squares = document.getElementById("board").getElementsByTagName("th");
//     for (var i in squares) {
//         squares[i].onclick = play;
//     }

// function checkForWinner() {

// }


//  function play() {
//        for (i = 0; i > 100; i++) {
//         this.innerHTML = rchar;
//       rchar =  random_character(); 




// var chars = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ??";

// function random_character(chars) {
    
//     return this.chars.substr( Math.floor(Math.random() * 100), 1);
// }


// var rchar = random_character();
// this.chars = this.chars.replace(rchar.toString(), "");

// console.log(rchar);
// console.log(chars.length);

// function play() {
//        for (i = 0; i > 100; i++) {
//         this.innerHTML = rchar;
//       rchar =  random_character(); 
//        } 

// }

// var squares = document.getElementById("board").getElementsByTagName("th");
// for (var i in squares) {
//    squares[i].onclick = play;
// } 














// function random_character() {

//     var chars = "AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLL";
//     var string_length = 1;
//     var randomstring = '';
//     for (var i = 0; i < string_length; i++) {
//         var rnum = Math.floor(Math.random() * chars.length);
//         randomstring += chars.substring(rnum,rnum+1);
//     }
    
//     document.randform.randomfield.value = randomstring;


//     // return this.chars.substr( Math.floor(Math.random() * 100), 1);
// }


// var rchar = random_character();
// this.chars = this.chars.replace(rchar, "");

// console.log(rchar);
// console.log(chars.length);

// function play() {
//        for (i = 0; i > 100; i++) {
//         this.innerHTML = rchar;
//       rchar =  random_character(); 
//        } console.log("Game over!")
//        console.log(chars.length);
// }

// var squares = document.getElementById("board").getElementsByTagName("td");
// for (var i in squares) {
//    squares[i].onclick = play;
// } 

// console.log(rchar);
// console.log(chars.length);

// function makeid()
// {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     for( var i=0; i < 1; i++ )
//         text += possible.charAt(Math.floor(Math.random() * possible.length));

//     return text;
// }



var chars = "keidra";


String.prototype.shuffle = function () {
    
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}





function play() {
        var catdog = "catdog"
       var rstring = catdog.shuffle();
      document.getElementById("1").innerHTML = rstring.charAt(0);
      document.getElementById("2").innerHTML = rstring.charAt(1);
      document.getElementById("3").innerHTML = rstring.charAt(2);
      document.getElementById("4").innerHTML = rstring.charAt(3);
      document.getElementById("5").innerHTML = rstring.charAt(4);
      document.getElementById("6").innerHTML = rstring.charAt(5);
}

var squares = document.getElementById("board").getElementsByTagName("td");
for (var i in squares) {
   squares[i].onclick = play;
}

 document.getElementById("restart").onclick = function() {
        for (var i in squares) {
           squares[i].innerHTML = '';
        }
    }
$(document).on('click', function(event) {
    $( "td" ).sortable({
      placeholder: "td"
    });
    $( "td" ).disableSelection();
});
 








