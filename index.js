const todoList = [
    {
        name :'make dinner',
        date : ' 2022-12-22 ' 
    },
    {
        name :'wash dishes',
        date : '2023-8-27'
    }
];

renderList();

function renderList(){

    let todoListHtml = ""

    for (let i=0; i<todoList.length; i++) { 
        const todoObject = todoList[i];
        const name = todoObject.name;
        const date = todoObject.date
        const html = `
  <div class="flex items-center justify-between bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 mb-3 hover:border-indigo-500 transition">

    <div class="flex flex-col">
      <p class="font-medium text-white capitalize">
        ${name}
      </p>
      <span class="text-sm text-slate-400">
        📅 ${date}
      </span>
    </div>

    <button 
      onclick="todoList.splice(${i}, 1); renderList();"
      class="text-red-400 hover:text-red-500 font-medium transition"
    >
      Delete
    </button>

  </div>
`;

        todoListHtml =  todoListHtml + html

    }
    console.log(todoListHtml);

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHtml
}


function addTodo(){

    const name = document.querySelector('.todo-name');
    const date = document.querySelector('.todo-date')

    const todoValue = name.value;
    const dateValue = date.value

    todoList.push({
        name: todoValue,
        date : dateValue
    });
    // todoList.push(dateValue);

    console.log(todoList)
    name.value = ''
    // date.value = ''
    renderList();
}