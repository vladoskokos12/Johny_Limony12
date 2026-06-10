const store = [];

function validName(inputName) {
    return inputName.value.length >= 3;
}
function validJob(inputJob) {
    return inputJob.value.length > 0;
}
function validNumber(inputNum) {
    const value = inputNum.value.replace(/\s+/g, '');
    return value !== "" && !isNaN(value);
}
function addUser(id, name, job, num) {
    const newUser = {
        id: id,
        name: name,
        job: job,
        number: num
    };
    store.push(newUser);
    return store;
}
const inputName = document.getElementById('inputName');
const inputJob = document.getElementById('inputJob');
const inputNum = document.getElementById('inputNum');
const addButton = document.getElementById('add');
const tableBody = document.getElementById('tableBody');

document.getElementById('delete').onclick = () => {
    tableBody.innerHTML = '';
    store.length = 0;
};
function deleteRowById(id) {
    const filtered = store.filter(x => x.id !== id);
    store.length = 0;
    store.push(...filtered);

    const rowToRemove = document.getElementById('user-row-' + id);
    if (rowToRemove) {
        rowToRemove.remove();
    }
}
addButton.addEventListener('click', () => {
    inputName.style.borderColor = '';
    inputJob.style.borderColor = '';
    inputNum.style.borderColor = '';

    if (!validName(inputName)) {
        inputName.style.borderColor = 'red';
        return;
    }
    if (!validJob(inputJob)) {
        inputJob.style.borderColor = 'red';
        return;
    }
    if (!validNumber(inputNum)) {
        inputNum.style.borderColor = 'red';
        return;
    }
    const userId = Date.now();

    addUser(userId, inputName.value, inputJob.value, inputNum.value);

    const row = document.createElement('tr');
    row.id = 'user-row-' + userId;

    row.innerHTML = `
        <td>${inputName.value}</td>
        <td>${inputJob.value}</td>
        <td>${inputNum.value}</td>
    `;

    const buttonCell = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.style.cssText = 'color:red; cursor:pointer; background:none; border:none; font-weight:bold; font-size:16px;';

    deleteBtn.onclick = function() {
        deleteRowById(userId);
    };

    buttonCell.appendChild(deleteBtn);
    row.appendChild(buttonCell);
    tableBody.appendChild(row);

    inputName.value = '';
    inputJob.value = '';
    inputNum.value = '';
});