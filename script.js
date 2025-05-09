document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading page

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();

  if (firstName && lastName) {
    document.getElementById('fullNameOutput').textContent = `Full Name: ${firstName} ${lastName}`;
  } else {
    alert("Please fill in both fields.");
  }
});
