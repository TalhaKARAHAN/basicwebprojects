document.getElementById('userForm').addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const score = document.getElementById('score').value;

    if (username.trim() === '' || score.trim() === '') {
        showAlert('Please fill in all fields', 'danger');
        return;
    }

    addItem(username, score);
    document.getElementById('username').value = '';
    document.getElementById('score').value = '';
}

function addItem(username, score) {
    const userList = document.getElementById('userList');
    const li = document.createElement('li');
    li.textContent = `${username}: ${score}`;
    userList.appendChild(li);
    showAlert('User added successfully', 'success');
}

function showAlert(message, type) {
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.textContent = message;
    alertMessage.classList.add('alert-' + type);
    setTimeout(() => {
        alertMessage.textContent = '';
        alertMessage.classList.remove('alert-' + type);
    }, 3000);
}


document.getElementById('resetButton').addEventListener('click', function() {
    window.location.reload();
});
