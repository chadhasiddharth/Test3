console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The event has been submitted sucessully");
}

function mouseHoverFunc(evt2) {
  evt2.preventDefault();

  alert("Pic Hover");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let mouseHover = document.querySelector(".duckid");

//mouseHover.addEventListener("mouseover", mouseHoverFunc);
