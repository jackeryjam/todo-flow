// 注册Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker 注册成功:', registration.scope);
            })
            .catch(err => {
                console.log('ServiceWorker 注册失败:', err);
            });
    });
}

// DOM 元素
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 从localStorage获取待办事项
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 渲染待办事项列表
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
            <button class="delete-btn">删除</button>
        `;

        // 切换完成状态
        const checkbox = li.querySelector('input');
        checkbox.addEventListener('change', () => {
            todos[index].completed = !todos[index].completed;
            saveTodos();
            renderTodos();
        });

        // 删除待办事项
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        todoList.appendChild(li);
    });
}

// 保存到localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 添加新的待办事项
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    
    if (text) {
        todos.push({
            text,
            completed: false
        });
        todoInput.value = '';
        saveTodos();
        renderTodos();
    }
});

// 初始渲染
renderTodos(); 