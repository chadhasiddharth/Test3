var myArray = [
  "Gage & Tollner",
  "Ugly Baby",
  "Francie",
  "Agi's Counte",
  "Leland Eating and Drinking House",
  "Nura. Restaurants",
  "Oxomoco",
  "Maison Yaki",
  "Sofreh",
  "Kokomo",
  "Rangoon",
  "Claro",
  "Olmsted",
  "Em Vietnamese Bistro",
];

const randomElement = myArray[Math.floor(Math.random() * myArray.length)];

//console.log(randomElement);

function favoriteRestaurant(evt) {
  evt.preventDefault();

  alert(randomElement);
}
let restaurantButton = document.querySelector("#restaurant");

restaurantButton.addEventListener("click", favoriteRestaurant);
