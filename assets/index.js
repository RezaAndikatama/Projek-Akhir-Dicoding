let card = document.querySelectorAll(".card");
for (cards of card) {
  cards.addEventListener("mouseover", function (event) {
    if (event.target.id === "pacifika") {
      event.target.setAttribute("src", "assets/img/pacifikanew.jpg");
      return;
    } else if (event.target.id === "ibanez") {
      event.target.setAttribute("src", "assets/img/ibaneznew.jpg");
      return;
    }
  });

  cards.addEventListener("mouseout", function (event) {
    if (event.target.id === "pacifika") {
      event.target.setAttribute("src", "assets/img/pacifika.jpg");
      return;
    }
    if (event.target.id === "ibanez") {
      event.target.setAttribute("src", "assets/img/ibanez.jpg");
      return;
    }
  });
}
