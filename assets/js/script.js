// adding some javascript effect to make the footer easier to read when hovered over

$("#thank-you").on("mouseover", mouseOver);
$("#thank-you").on("mouseout", mouseOut);


function mouseOver() {
 $("#thank-you").css("background-color", "black")
}

function mouseOut() {
  $("#thank-you").css("background-color", "transparent");
}

//adding an efect of hovering a button
$(".card-back").on("mouseover", borderIn);

$(".card-back").on("mouseout", borderOut);

function borderIn() {
    $(this).css("border", "4px inset gold")
}

function borderOut() {
    $(this).css("border", "4px outset gold");
}