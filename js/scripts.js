
$(document).ready(function() {
  $("button#cat1").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
  });

  $("button#cat2").click(function() {
    $("ul#cat").prepend("<li>Meow Meow Meow!</li>");
    $("ul#dog").prepend("<li>Woof Woof lets play!</li>");
  });

  $("button#cat3").click(function() {
    $("ul#cat").prepend("<li>Hissssss!</li>");
    $("ul#dog").prepend("<li>Why are you such a @#$!!</li>");
  });
});
