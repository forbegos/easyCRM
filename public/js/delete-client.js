const delButtonHandler = async (event) => {
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/clients/client-delete/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/clients");
  } else {
    alert("Failed to delete client");
  }
};
document
  .querySelector(".delete-button")
  .addEventListener("click", delButtonHandler);
