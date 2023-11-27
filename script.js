const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
    // Your code to add a task will go here

    const newTaskText = taskInput.value;
    
    if (newTaskText.trim() !== '') { // Check if the input is not empty
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = newTaskText;
        taskList.appendChild(newTaskItem);
    
        // Clear the input field
        taskInput.value = '';
    
        // Optionally, add a remove button to each task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        newTaskItem.appendChild(removeButton);
    
        // Add a click event listener to the remove button to handle task removal
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTaskItem);
        });
    
        // Optionally, add a checkbox or button to mark tasks as completed
    }
    
});

