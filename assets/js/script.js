$("#thank-you").on("mouseover", mouseOver);
$("#thank-you").on("mouseout", mouseOut);


function mouseOver() {
 $("#thank-you").css("background-color", "black")
}

function mouseOut() {
  $("#thank-you").css("background-color", "transparent");
}
