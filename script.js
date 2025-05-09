document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload

  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  let outputEl    = document.getElementById('fullNameOutput');

  // Remove the div if it exists (first)
  if (outputEl) {
    outputEl.remove();
  }

  // Only create and append if both fields are filled
  if (firstName && lastName) {
    outputEl = document.createElement('div');
    outputEl.className = 'output';
    outputEl.id = 'fullNameOutput';
    outputEl.textContent = `Full Name: ${firstName} ${lastName}`;
    document.body.appendChild(outputEl);
  }
});
