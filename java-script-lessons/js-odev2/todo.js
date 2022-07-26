
const taskDOM = document.querySelector("#task");
const listDOM = document.querySelector("#list");
const btnDOM = document.querySelector("#liveToastBtn");

document.addEventListener('DOMContentLoaded', getFromStorage)
listDOM.addEventListener("click", markDone)

//todo ekleyecek fonksiyon
btnDOM.onclick = function newElement(task) {
    
    if(!taskDOM.value){
        $('#errorToast').toast("show");
        
    }else if(taskDOM !== ""){        
        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.appendChild(document.createTextNode(taskDOM.value))
        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
        li.append(link)
        listDOM.appendChild(li)

        addToStorage(taskDOM.value)
        
        $('#successToast').toast("show");
    }
    
    taskDOM.value = "";
    task.preventDefault();
}

//todoları local storage'a ekleyecek fonksiyon
function addToStorage(task){
    
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))

}

//todoları local storage'dan alıp ekrana yazdıracak fonksiyon
function getFromStorage(){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(document.createTextNode(task))
        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
        li.append(link)
        listDOM.appendChild(li)
    });
}

//todo silecek fonksiyon
function removeItem(event){

    if(event.target.parentElement.parentElement.classList.contains('list-group-item')){
        removeFromStorage(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();
    }
}

//todoları local storage'dan silecek fonksiyon
function removeFromStorage(taskItem){
    
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }


    tasks.forEach(function(task, index){

        if(taskItem.textContent == task){
            tasks.splice(index, 1);
        }
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

//todoları checkleyecek fonksiyon
function markDone(event) {
    if (event.target.className === "list-group-item d-flex justify-content-between align-items-center") {
        event.target.className = "checked list-group-item d-flex justify-content-between align-items-center";
    } else if (event.target.className === "checked list-group-item d-flex justify-content-between align-items-center") { //tıklanılan elementte checked classı varsa onu geri aldık
        event.target.className = "list-group-item d-flex justify-content-between align-items-center";
    }
}