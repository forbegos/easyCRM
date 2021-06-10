const updateButtonHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#task-content").value.trim();
  //   const date = document.querySelector("#client-phone").value.trim();
  // const client_id = document.querySelector("#client_id").value.trim();

  const id = event.target.getAttribute("data-id");

  if (content) {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        content,
        // client_id,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update task");
    }
  }
};

document
  .querySelector(".update-task")
  .addEventListener("click", updateButtonHandler);
