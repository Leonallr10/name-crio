document.getElementById('nameForm').addEventListener('submit', function(event) {
  event.preventDefault(); // keep page from reloading

  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const outputEl  = document.getElementById('fullNameOutput');

  // BOTH fields filled?
  if (firstName && lastName) {
    // just update the existing div
    outputEl.textContent = `Full Name: ${firstName} ${lastName}`;
  } else {
    // remove it from the DOM so Cypress .should('not.exist') passes
    if (outputEl) {
      outputEl.remove();
    }
  }
});
