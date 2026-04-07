const basebody = document.querySelector("#basebody");
const chest = document.querySelector("#chest");
const head = document.querySelector("#head");
const lips = document.querySelector("#lips");

function clearBodyStates() {
  if (head) head.classList.remove("active-head");
  if (chest) chest.classList.remove("active-chest");
  if (lips) lips.classList.remove("visible-lips");
}

if (head) {
  head.addEventListener("click", () => {
    clearBodyStates();
    head.classList.add("active-head");
    if (lips) lips.classList.add("visible-lips");
  });
}

if (chest) {
  chest.addEventListener("click", () => {
    clearBodyStates();
    chest.classList.add("active-chest");
  });
}
