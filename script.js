document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const outputContainer = document.getElementById('outputContainer');

  // Remove previous output if exists
  const existingOutput = document.getElementById('fullNameOutput');
  if (existingOutput) {
    outputContainer.removeChild(existingOutput);
  }

  // If both fields are filled, show full name
  if (firstName && lastName) {
    const output = document.createElement('div');
    output.id = 'fullNameOutput';
    output.className = 'output';
    output.textContent = `Full Name: ${firstName} ${lastName}`;
    outputContainer.appendChild(output);
  }
});
