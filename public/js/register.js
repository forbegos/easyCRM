const registerFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#creatUserName").value.trim();
  const email = document.querySelector("#creatEmail").value.trim();
  const password = document.querySelector("#createPassword").value.trim();
  console.log("data to send");
  console.log(username);
  console.log(email);
  console.log(password);

  if (username && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".register-form")
  .addEventListener("submit", registerFormHandler);
