function mudoutamanho() {
  if (window.innerWidth > 520) {
    document.getElementById("ItensMenu").style.display = "flex";
    document.getElementById("burguer").style.display = "none";
  } else {
    document.getElementById("ItensMenu").style.display = "none";
    document.getElementById("burguer").style.display = "flex";
  }
}

function cliquemenu() {
  if (document.getElementById("ItensMenu").style.display === "flex") {
    document.getElementById("ItensMenu").style.display = "none";
  } else {
    document.getElementById("ItensMenu").style.display = "flex";
  }
}
