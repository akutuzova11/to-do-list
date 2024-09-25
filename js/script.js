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

    const tickAllTasksCompleted = () => {
        tasks = tasks.map((task)=> ({...task, completed: true}));
        render();
    }

    const hideAllCompletedTasks = () => {
        hideCompletedTask = !hideCompletedTask;
        render();
    }

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
        let htmlForTasksList = (task) => `
            <li class="todoTasks__item ${task.completed && hideCompletedTask ? "todoTasks__items--hidden" : ""} js-tasks">
                <button class="js-toggleCompleted todoTasks__button">${task.completed ? "✔" : ""}</button>
                <span class="${task.completed ? "todoTasks__item--toggleCompleted" : ""}">${task.content}</span>
                <button class="js-remove todoTasks__button todoTasks__button--deleted">🗑</button>
            </li>
            `;
        }
        const taskListElement = document.querySelector(".js-tasks");
        taskListElement.innerHTML = tasks.map(htmlForTasksList).join("");
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
