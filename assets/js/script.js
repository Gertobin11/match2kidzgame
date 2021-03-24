document.getElementById("thank-you").addEventListener("mouseover", mouseOver);
document.getElementById("thank-you").addEventListener("mouseout", mouseOut);


function mouseOver() {
  document.getElementById("thank-you").style.backgroundColor = "black";
}

function mouseOut() {
  document.getElementById("thank-you").style.backgroundColor = "transparent";
}
