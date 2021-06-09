const createButtonHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#client-name").value.trim();
  const phone = document.querySelector("#client-phone").value.trim();
  const address = document.querySelector("#client-address").value.trim();
  const website = document.querySelector("#client-website").value.trim();

  if (name && phone && address && website) {
    const response = await fetch("api/clients/", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        address,
        website,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/clients");
    } else {
      alert("Failed to create client");
    }
  }
};

document
  .querySelector(".create-client")
  .addEventListener("click", createButtonHandler);
