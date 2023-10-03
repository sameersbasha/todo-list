// Sample user data for demonstration purposes
const userData = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
];

let currentUser = null;
const taskList = document.getElementById("task-list");
const loginForm = document.getElementById("login-form");
const todoContainer = document.getElementById("todo-container");
const authContainer = document.getElementById("auth-container");

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the user exists in userData
    const user = userData.find((u) => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        authContainer.style.display = "none";
        todoContainer.style.display = "block";
    } else {
        alert("Invalid username or password");
    }
}

function addTask() {
    const taskInput = document.getElementById("task");
    const timingInput = document.getElementById("timing");

    const taskText = taskInput.value.trim();
    const timingText = timingInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}${timingText ? ` (${timingText})` : ""}</span> 
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(taskItem);

        taskInput.value = "";
        timingInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
