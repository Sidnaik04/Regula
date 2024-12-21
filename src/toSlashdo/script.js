document.addEventListener('DOMContentLoaded',()=>{
    const taskInput = document.getElementById('task-input');
    const taskButton = document.getElementById('taskBtn');
    const todoList = document.getElementById('todo-list');

    //to store task
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    //loop for rendering tasks
    tasks.forEach((task)=> renderTask(task));

    //to add task
    taskButton.addEventListener('click',()=>{
        const taskText = taskInput.value.trim();

        if(taskText === "") return

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        };

        tasks.push(newTask)
        saveTasks();
        renderTask(newTask)
        taskInput.value = "";
        console.log(tasks);
    })

    //to render tasks
    function renderTask(task){
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if(task.completed) li.classList.add('completed');

        li.innerHTML = `<span>${task.text}</span> <button>Delete</button>`

        //toggle for complete
        li.addEventListener('click',(e)=>{
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        })

        //delete button
        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation();
            tasks = tasks.filter((t)=> t.id !== task.id);
            li.remove()
            saveTasks();
        })

        //append li to list
        todoList.appendChild(li)
    }

    //to save tasks in localstorage
    function saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

})