function validateForm() {
  const email = document.forms["signupForm"]["email"].value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }
  return true;
}
