document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  const output = document.getElementById('fullNameOutput');

  if (firstName && lastName) {
    output.textContent = `Full Name: ${firstName} ${lastName}`;
    output.style.display = 'block';
  } else {
    output.style.display = 'none'; // Hide output on invalid input
  }
});
