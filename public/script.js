const enterButton = document.getElementById("enter");
const input = document.getElementById("inputText");
const tableSection = document.getElementById("table-section");
const table = document.getElementById("table");
const tbody = document.getElementById("body-table");
const message = document.getElementById("message");

enterButton.addEventListener("click", (event) => {
  getresults(document.getElementById("inputText").value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  renderizarRepuesta(data);
}

function renderizarRepuesta(data) {
  const tabla = document.getElementById("body-table");
  removeAllChildNodes(tabla);
  data.forEach((elem) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <th scope="row">${elem.id}</th>
    <td>${elem.jug1}</td>
    <td>${elem.jug2}</td>
    `;

    tabla.appendChild(fila);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
