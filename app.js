// defining ui variables
const form = document.querySelector('#task-form');

const taskInput = document.querySelector('#task');

const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('clear-tasks');

const filter = document.querySelector('#filter');

const tasksCard = document.querySelector('.card-action');

console.log(tasksCard);

// loading event listeners
loadEventListeners();

function loadEventListeners(){

    // adding the "add task" event

    form.addEventListener('submit', addTask);

    // delete task event
    taskList.addEventListener('click', deleteTask);

    // clear tasks event
    tasksCard.addEventListener('click', clrTasks);

    // filter event

    filter.addEventListener('input', taskFilter);

}

function clrTasks(){
     taskList.innerHTML = '';
    
    }
}

function deleteTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
    e.preventDefault();
}

function addTask(e){
    if(taskInput.value === ''){
        alert('add a task');
    }
    

    // creating list li element

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    // creating link element

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);

    this.reset();


    // console.log(li);
 
    e.preventDefault();
}

function taskFilter(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function (task){
            const item = task.firstChild.textContent;

            if(item.toLowerCase().indexOf(text) !== -1){
                task.style.display = 'block';
            } else{
                task.style.display = 'none';
            }
        }
    );

    e.preventDefault();
}
