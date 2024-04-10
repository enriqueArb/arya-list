console.log("Añadamos a algún enemigo...");

const form = document.getElementById("form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get("nombre");

  if (!name) return;

  const listItem = document.createElement("li");
  listItem.classList.add("kill-list__item");

  const label = document.createElement("label");
  label.classList.add("kill-list__input");
  label.innerText = name;

  const checkInput = document.createElement("input");
  checkInput.type = "checkbox";

  label.appendChild(checkInput);

  listItem.appendChild(label);

  const list = document.getElementById("kill-list");
  list.appendChild(listItem);

  document.getElementById("nombre").value = "";
}
