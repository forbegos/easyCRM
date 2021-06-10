const updateButtonHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#client-name").value.trim();
  const phone = document.querySelector("#client-phone").value.trim();
  const address = document.querySelector("#client-address").value.trim();
  const website = document.querySelector("#client-website").value.trim();

  const id = event.target.getAttribute("data-id");

  if (name && phone && address && website) {
    const response = await fetch(`/api/clients/${id}`, {
      method: "PUT",
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
      alert("Failed to update client");
    }
  }
};

document
  .querySelector(".update-client")
  .addEventListener("click", updateButtonHandler);
