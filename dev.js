{
    const tasks = [
        {
            content: "spacer w parku",
            completed: false,
        },
        {
            content: "yoga o 19:30",
            completed: true,
        },
    ];
    const addNewItem = (newItemContent) => {
        tasks.push({
          content: newItemContent,
        });
        render();
      }
      const render = () => {
        let htmlString = "";
        for(const task of tasks) {
            htmlString += `
            <li class="todoTasks__item ${task.completed ? "todoTasks__item--toggleCompleted" : ""}">
            <button class="js-toggleCompleted todoTasks__button">${task.completed ? "✔" : ""}
            </button>
            <span class="${task.completed ? "todoTasks__item--toggleCompleted" : ""}">${task.content}
            </span>
            <button class="js-remove todoTasks__button todoTasks__button--deleted">🗑</button>
            </li>
            `;
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
        