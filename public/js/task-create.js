const createTaskHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  // const owner = document.querySelector("#option-user").value.trim();
  const client_id = document.querySelector("#client_id").value.trim();
  const content = document.querySelector("#task-content").value.trim();
  var d = new Date();
  var date = d.toISOString();
  console.log(date);

  if (client_id && content && date) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/tasks/", {
      method: "POST",
      body: JSON.stringify({ content, date, client_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create task");
    }
  }
};

document
  .querySelector(".create-task")
  .addEventListener("click", createTaskHandler);
