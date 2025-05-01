function validateForm() {
  const form = document.forms['signupForm'];
  const email = form['email'].value;
  const name = form['name'].value;
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return false;
  }
  if (name.length < 2) {
    alert('Name must be at least 2 characters.');
    return false;
  }
  return true;
}
