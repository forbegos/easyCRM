const updateButtonHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#update-desc").value.trim();
  const hours = document.querySelector("#update-hours").value.trim();
  const revenue = document.querySelector("#update-revenue").value.trim();

  const id = event.target.getAttribute("data-id");
  console.log(id);

  console.log(description, hours, revenue, id);

  if (description && hours && revenue) {
    const response = await fetch(`/api/leads/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({ description, hours, revenue }),
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
