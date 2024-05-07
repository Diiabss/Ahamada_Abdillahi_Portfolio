var liens = document.getElementsByTagName("a");

for (var i = 0; i < liens.length; i++) {
  liens[i].addEventListener("click", function() {
    this.classList.add("clicked");
    localStorage.setItem(this.id, "clicked");
  });

  // Vérifiez l'état du lien lors du chargement de la page et appliquez le style approprié
  if (localStorage.getItem(liens[i].id) === "clicked") {
    liens[i].classList.add("clicked");
  }
}