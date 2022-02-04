function favoriteColor(evt) {
  evt.preventDefault();

  alert("My favorite color is red");
}

function favoritePlace(evt2) {
  evt2.preventDefault();

  alert("My favorite place is New York City");
}

function favoriteSport(evt3) {
  evt3.preventDefault();

  alert("My favorite ritual is playing sports");
}

let colorButton = document.querySelector("#color");
let favoritePlaceBtn = document.querySelector("#place");
let favoriteSportBtn = document.querySelector("#ritual");

colorButton.addEventListener("click", favoriteColor);
favoritePlaceBtn.addEventListener("click", favoritePlace);
favoriteSportBtn.addEventListener("click", favoriteSport);
