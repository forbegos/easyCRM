const createLeadHandler = async (event) => {
  event.preventDefault();

  const client_id = document.querySelector("#client-id").value.trim();
  const description = document.querySelector("#create-desc").value.trim();
  const hours = document.querySelector("#create-hours").value.trim();
  const revenue = document.querySelector("#create-revenue").value.trim();

  if (client_id && description && hours && revenue) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/leads/", {
      method: "POST",
      body: JSON.stringify({ description, hours, revenue, client_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create lead");
    }
  }
};

document
  .querySelector(".create-lead")
  .addEventListener("click", createLeadHandler);
