
li.textContent = `${users.username} (${users.email})`;
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

let users = [];

userForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const user = { username, email };
    users.push(user);
    displayUsers();
    userForm.reset();
});

function displayUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.username} (${user.email})`;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editUser(index);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = () => deleteUser(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}

function editUser(index) {
    const user = users[index];
    document.getElementById('username').value = user.username;
    document.getElementById('email').value = user.email;

    users.splice(index, 1);
    displayUsers();
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}
