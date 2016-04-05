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


function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

var wordbank = ['website', 'virtual', 'version', 'utility', 'toolbar', 'storage', 'spyware', 'spammer', 'scanner', 'runtime', 'restore', 
'program', 'process', 'privacy', 'printer', 'podcast', 'offline', 'network', 'monitor', 'malware', 'lurking', 'keyword', 
'integer', 'exabyte', 'encrypt', 'dynamic', 'digital', 'desktop', 'compile', 'command', 'captcha', 'browser'];
var rndNum = getRandomInt(0, wordbank.length - 1);
var word = wordbank[rndNum];


function play() {
  console.log(word);
      var rstring = word.shuffle();
      document.getElementById("1").innerHTML = rstring.charAt(0);
      document.getElementById("2").innerHTML = rstring.charAt(1);
      document.getElementById("3").innerHTML = rstring.charAt(2);
      document.getElementById("4").innerHTML = rstring.charAt(3);
      document.getElementById("5").innerHTML = rstring.charAt(4);
      document.getElementById("6").innerHTML = rstring.charAt(5);
      document.getElementById("7").innerHTML = rstring.charAt(6);
}

var squares = document.getElementById("board").getElementsByTagName("td");
for (var i in squares) {
   squares[i].onclick = play;
}

document.getElementById("restart").onclick = function() {
    for (var i in squares) {
       squares[i].innerHTML = '';
    }
    rndNum = getRandomInt(0, wordbank.length - 1);
    word = wordbank[rndNum];
}

$(document).on('click', function(event) {
    $( '#board tr' ).sortable({
      placeholder: '#board tr'
    });
    $( '#board tr' ).disableSelection();
});


var total =$(this).find('word');
if(total.length === total.filter(wordbank).length){
    alert('correct');
}

// $("#board").sortable({
//     items: "> tr:not(:first)",
//     appendTo: "parent",
//     helper: "clone"
// }).disableSelection();

// $("#board tr td").droppable({
//     hoverClass: "drophover",
//     tolerance: "pointer",
//     drop: function (e, ui) {
//         var tabdiv = $(this).attr("href");
//         $(tabdiv + " table").append(ui.draggable.clone(true).show());
//         ui.draggable.remove();
//     }
// });
 








