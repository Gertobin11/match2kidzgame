$("#thank-you").on("mouseover", mouseOver);
$("#thank-you").on("mouseout", mouseOut);


function mouseOver() {
 $("#thank-you").css("background-color", "black")
}

function mouseOut() {
  $("#thank-you").css("background-color", "transparent");
}

$(".card-back").on("click", borderIn);

function borderIn() {
    $("img").css("border", "4px outset gold");
    $(this).css("border", "4px inset gold")
    
}