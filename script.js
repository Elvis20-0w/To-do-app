// Get references to the input field, button, and task list
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value and trim any extra spaces

    if (taskText !== '') { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text content of the list item

        const removeBtn = document.createElement('button'); // Create a remove button
        removeBtn.textContent = 'Remove'; // Set the text of the remove button
        removeBtn.onclick = () => taskList.removeChild(li); // Set the onclick event to remove the task

        li.appendChild(removeBtn); // Append the remove button to the list item
        taskList.appendChild(li); // Append the list item to the task list

        taskInput.value = ''; // Clear the input field
    }
}

// Add event listener to the button to call addTask function when clicked
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow adding a task by pressing the Enter key
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});