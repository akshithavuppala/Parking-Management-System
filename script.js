let transactions = [
    { id: 1, vehicle: 'ABC123', startTime: '2024-02-25T10:00:00', endTime: '2024-02-25T12:00:00', amount: 5.00 },
    { id: 2, vehicle: 'XYZ456', startTime: '2024-02-25T11:00:00', endTime: '2024-02-25T13:00:00', amount: 7.50 }
    // Add more sample transactions as needed
];

function populateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Vehicle:</strong> ${transaction.vehicle} |
            <strong>Start Time:</strong> ${transaction.startTime} |
            <strong>End Time:</strong> ${transaction.endTime} |
            <strong>Amount:</strong> $${transaction.amount.toFixed(2)}
        `;
        transactionList.appendChild(li);
    });
}

// Call the function to initially populate the list
populateTransactionList();

let vehicles = [];

function addVehicle() {
    const vehicleNumber = document.getElementById('vehicle-number').value;
    const dateTime = new Date().toLocaleString();
    vehicles.push({ vehicleNumber, dateTime });

    const vehicleList = document.getElementById('vehicle-list');
    const li = document.createElement('li');
    li.textContent = `Vehicle Number: ${vehicleNumber} | Date & Time: ${dateTime}`;
    vehicleList.appendChild(li);

    // Clear the input field after adding the vehicle
    document.getElementById('vehicle-number').value = '';
}

document.getElementById('add-vehicle-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addVehicle();
});

document.getElementById('transactions-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('transactions').style.display = 'block';
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('parking-spots').style.display = 'none';
});

document.getElementById('vehicles-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('vehicles').style.display = 'block';
    document.getElementById('transactions').style.display = 'none';
    document.getElementById('parking-spots').style.display = 'none';
});

document.getElementById('parking-spots-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('parking-spots').style.display = 'block';
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('transactions').style.display = 'none';
});

// Hide transactions and vehicles sections by default
document.getElementById('transactions').style.display = 'none';
document.getElementById('vehicles').style.display = 'none';
document.getElementById('parking-spots').style.display = 'none';

