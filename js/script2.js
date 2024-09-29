
const appointmentForm = document.getElementById('appointmentForm');
const appointmentList = document.getElementById('appointmentList');

let appointments = [];

appointmentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;

    const appointment = {
        petName,
        date: appointmentDate,
        time: appointmentTime,
    };

    appointments.push(appointment);
    displayAppointments();
    appointmentForm.reset();
});

function displayAppointments() {
    appointmentList.innerHTML = '';
    appointments.forEach((appointment, index) => {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteAppointment(index);

        li.appendChild(deleteButton);
        appointmentList.appendChild(li);
    });
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    displayAppointments();
}
