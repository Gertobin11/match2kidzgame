// adding some javascript effect to make the footer easier to read when hovered over
$("#thank-you").on("mouseover", mouseOver);
$("#thank-you").on("mouseout", mouseOut);


function mouseOver() {
 $("#thank-you").css("background-color", "black")
}

function mouseOut() {
  $("#thank-you").css("background-color", "transparent");
}

$(".card-back").on("click", borderIn);

//adding an efect of clicking a button

function borderIn() {
    $("img").css("border", "4px outset gold");
    $(this).css("border", "4px inset gold")
    
}