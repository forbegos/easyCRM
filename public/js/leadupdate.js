const updateButtonHandler = async (event) => {
  event.preventDefault();

  const client_id = document.querySelector("#client-id").value.trim();
  const description = document.querySelector("#update-desc").value.trim();
  const hours = document.querySelector("#update-hours").value.trim();
  const revenue = document.querySelector("#update-revenue").value.trim();

  const id = event.target.getAttribute("data-id");

  if (description && hours && revenue && client_id) {
    const response = await fetch(`/api/leads/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({ description, hours, revenue, client_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update lead");
    }
  }
};
document
  .querySelector(".update-lead")
  .addEventListener("click", updateButtonHandler);
