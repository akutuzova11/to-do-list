{
    let hideCompletedTask = false;
    
    let tasks = [
        { content: "spacer w parku", completed: false },
        { content: "yoga o 19:30", completed: true },
    ];

    const addNewItem = (newItemContent) => {
        tasks = [...tasks, { content: newItemContent }];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = tasks.filter((task,i) => i !== taskIndex)
        render();
    };

    const toggleTaskCompleted = (taskIndex) => {
        tasks = tasks.map((task,i) => i === taskIndex ? {...task, completed: taskCompleted} : task);
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleCompletedButtons = document.querySelectorAll(".js-toggleCompleted");
        toggleCompletedButtons.forEach((toggleCompletedButton, index) => {
            toggleCompletedButton.addEventListener("click", () => {
                toggleTaskCompleted(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="todoTasks__item ${task.completed ? "todoTasks__item--toggleCompleted" : ""}">
                <button class="js-toggleCompleted todoTasks__button">${task.completed ? "✔" : ""}</button>
                <span class="${task.completed ? "todoTasks__item--toggleCompleted" : ""}">${task.content}</span>
                <button class="js-remove todoTasks__button todoTasks__button--deleted">🗑</button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newItemInput = document.querySelector(".js-newItem");
        const newItemContent = newItemInput.value.trim();

        if (newItemContent === "") {
            newItemInput.focus(); 
            return;
        }

        addNewItem(newItemContent);
        newItemInput.value = "";
        newItemInput.focus(); 
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
}
