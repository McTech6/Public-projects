const todoList= [{
    name: 'Eat',
    dueDate: '12/04/2022'
}];
renderTodoList()
function renderTodoList(){
    let  todoListHTML = ``;
        for (let i=0; i<todoList.length; i++){
            const todoObject = todoList[i];
            const name = todoObject.name;
            const dueDate= todoObject.dueDate;
            const html = `
            <div>${name}</div>
             <div> ${dueDate}</div>
                <button class="delete-btn" onclick="
                todoList.splice(${i},1);
                renderTodoList();
                ">Delete</button>
             
             `;
            todoListHTML+= html;
        }
        console.log(todoListHTML);

        document.querySelector('.display').innerHTML =todoListHTML;
        }

function createArray(){
    const todoElement= document.querySelector('.js-name-input');
    const name= todoElement.value;
    const dateGot=document.querySelector('.js-duedate');
    const dueDate=dateGot.value;
    
    todoList.push({
        name: name,
        dueDate: dueDate});
    console.log(todoList);
    
     todoElement.value='';
     renderTodoList();
}
  