const delButtonHandler = async (event) => {
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/tasks//task-delete/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete task");
  }
};
document
  .querySelector(".delete-button")
  .addEventListener("click", delButtonHandler);
