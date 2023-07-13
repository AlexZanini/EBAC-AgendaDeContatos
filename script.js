document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const table = document.getElementById('contacts-table');
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = phone;

    // Limpar campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
