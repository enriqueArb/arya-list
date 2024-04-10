console.log("Añadamos a algún enemigo...");

const form = document.getElementById("form");
form.addEventListener("submit", onFormSubmit);

document
  .querySelectorAll('input[type="checkbox"]')
  .forEach(function (itemCheck) {
    itemCheck.addEventListener("click", function () {
      updateStatusPills();
    });
  });

function updateStatusPills() {
  const totalItems = document.querySelectorAll('input[type="checkbox"]').length;
  const doneItems = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  const pendingItems = totalItems - doneItems;

  const allItemsPill = document.getElementById("all-items-pill");
  allItemsPill.innerText = totalItems;
  const doneItemsPill = document.getElementById("done-items-pill");
  doneItemsPill.innerText = doneItems;
  const pendingItemsPill = document.getElementById("pending-items-pill");
  pendingItemsPill.innerText = pendingItems;
}

function addListItem(name) {
  if (!name) return;

  const listItem = document.createElement("li");
  listItem.classList.add("kill-list__item");

  const label = document.createElement("label");
  label.classList.add("kill-list__input");
  label.innerText = name;

  const checkInput = document.createElement("input");
  checkInput.type = "checkbox";
  checkInput.addEventListener("click", function () {
    updateStatusPills();
  });

  label.appendChild(checkInput);

  listItem.appendChild(label);

  const list = document.getElementById("kill-list");
  list.appendChild(listItem);

  document.getElementById("nombre").value = "";

  updateStatusPills();
}

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get("nombre");

  addListItem(name);
}
