const shoppingLists = document.querySelector(".shopping__lists");

function addToList() {
  let newList = document.getElementById("newList").value;
  const li = document.createElement("li");
  li.setAttribute("class", "shoppling__lists__list");
  li.innerHTML = `<span>${newList}</span>
                <i class="fas fa-trash-alt" onclick="removeFromList(event)">
                </i>
                `;
  shoppingLists.appendChild(li);
  document.getElementById("newList").value = "";
}

function removeFromList(event) {
  event.target.parentNode.remove();
}
