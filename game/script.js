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
 








