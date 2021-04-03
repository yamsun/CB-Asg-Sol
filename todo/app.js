const input = document.querySelector("input");
// input.value = 'shyam';

const addBtn = document.querySelector('button');

const list = document.querySelector('ul');



const addTaskToList = ()=> {
    if(input.value!=""){
        const newTask = document.createElement('li');
        newTask.innerText=input.value;
        list.append(newTask);
        input.value = "";
        newTask.onclick=(e)=>{e.target.remove()}
    }
    
}

addBtn.addEventListener('click', addTaskToList);



