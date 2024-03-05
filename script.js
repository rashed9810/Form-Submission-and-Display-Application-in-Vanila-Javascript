document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const position = document.getElementById('position').value;

        if (name === '' || email === '' || phone === '' || position === '') {
            alert('Please fill in all fields');
            return;
        }

        const formData = {
            name: name,
            email: email,
            phone: phone,
            position: position
        };

        saveData(formData);
        displayData(formData);
        form.reset();
    });

    let data;

    function saveData(data) {
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(data);
        localStorage.setItem('formData', JSON.stringify(storedData));
    }

    function displayData(data) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${data.position}</td>
        `;
        dataTable.appendChild(row);

    }

    window.addEventListener('load', function() {
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.forEach(data => displayData(data));
    });
});