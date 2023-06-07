const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
        .then(response => response.json())
        .then((data) => {
            data.forEach((todo) => addTodoToDOM(todo));
        });
}

const addTodoToDOM = (todo) => {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id);

    if (todo.completed) {
        div.classList.add('done')
    }

    document.getElementById('todo-list').appendChild(div);
};

const createTodo = (event) => {
    event.preventDefault();
    const newTodo = {
        title: event.target.firstElementChild.value,
        completed: false
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then((data) => addTodoToDOM(data));
};

const toggleCompleted = (event) => {
    if (event.target.classList.contains('todo')) {
    event.target.classList.toggle('done');

    updateTodo(event.target.dataset.id, event.target.classList.contains('done'));
    }
}

const updateTodo = (id, completed) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({completed}),
        headers: {
            'Content-type': 'application/json'
        }
    })
};

const deleteTodo = (event) => {
    if (event.target.classList.contains('todo')) {
        const id = event.target.dataset.id
        fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json)
        .then(() => event.target.remove())
    }
};

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos);
    document.querySelector('#todo-form').addEventListener('submit', createTodo);
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();