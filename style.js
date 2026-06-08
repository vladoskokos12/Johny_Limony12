let rowCount = 0
const names = ["Алексей", "Пупа", "Вапо"];
const surnames = ["Петров", "Лупа", "Чапо"];
const cities = ["Москва", "Лондон", "Чикаго"];

function addRow() {
  const tbody = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
  const newRow = tbody.insertRow();
  rowCount++;
const nameIndex = (rowCount - 1) % names.length;
const surnameIndex = (rowCount - 1) % surnames.length;
const cityIndex = (rowCount - 1) % cities.length;

  newRow.innerHTML = `
    <td><input type="checkbox" class="row-select"></td>
    <td contenteditable="true">${rowCount}</td>
    <td contenteditable="true">${names[nameIndex]}</td>
    <td contenteditable="true">${surnames[surnameIndex]}</td>
    <td contenteditable="true">${20 + (rowCount % 15)}</td> 
    <td contenteditable="true">${rowCount}email@example.com</td>
    <td contenteditable="true">+7 (9${10 + (rowCount % 90)}) ___-__-__</td>
    <td contenteditable="true">${cities[cityIndex]}</td>
  `;
}
function toggleAll (source) {
  const checkboxes = document.querySelectorAll('.row-select');
  checkboxes.forEach(checkbox => checkbox.cheked = source.cheked );
}
function deleteSelectedRows() {
  if (!confirm('удалить выбранные строки?')) return;;
  const checkboxes = document.querySelectorAll('.row-select:cheked');
  checkboxes.forEach (checkbox => {
    const row = checkbox.parentElement.parentElement;
    row.remove();
  })
}