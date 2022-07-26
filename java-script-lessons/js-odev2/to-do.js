
const taskDOM=document.querySelector("#task")
const btnDOM=document.querySelector("#liveToastBtn")
const listDOM=document.querySelector("#list")


btnDOM.addEventListener("click", newElement) //listeye todo ekleyecek + //addToStorage() local storage'a todo ekleyecek
document.addEventListener("DOMContentLoaded",loadToList) //todo'ları storage'dan listeye ekleyecek
listDOM.addEventListener("onclick", removeItem) //listeden todo silecek + //removeFromStorage() local storage'dan todo silecek


//element ekleyecek fonksiyon

function newElement(task) {
    switch(taskDOM) {
        case (taskDOM.value ===""):
            $("#errorToast").toast("show");
        break;

        case (taskDOM !==""):
            const li = document.createElement('li')
            li.className = "list-group-item d-flex justify-content-between align-items-center";

            li.appendChild(document.createTextNode(taskDOM.value))
            const link = document.createElement('a')
            link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`

            li.append(link)
            listDOM.appendChild(li)

            addLocalStorage(taskDOM.value)
            
            $('#successToast').toast("show");

        break;
    }

    taskDOM.value="" //ekledikten sonra inputu temizledik
    task.preventDefault();
};

//listeye eklenen todo'yu local storage'a ekleyecek fonksiyon

function addToStorage(task) {
    let tasks;

    if(localStorage.getItem(tasks)==="") {
        tasks=[];
    } else {
        tasks=JSON.parse(localStorage.getItem(tasks));
    }

    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))
};

//todoları storage'dan alacak fonksiyon 

function getFromStorage(){
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        //varsa todos isimli değişkene json halinde o verileri gönder
        tasks = JSON.parse(localStorage.getItem("tasks"));
      }
    

};

//todo'ları storage'dan listeye ekleyecek fonksiyon

function loadToList() {
    let tasks=getFromStorage();
    tasks.forEach((task)=>{
        const listItem=document.createElement("li") //list item oluşturduk
        listItem.className="liItem"
        listItem.append(task)

        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}` //silme işlemi için gerekli ikon
        listItem.appendChild(li)
        listDOM.appendChild(listItem)
    })
};

//elementi yapıldı olarak işaretleyecek fonksiyon

function markDone(e) {
    if (e.target.className === "liItem") {
        e.target.className = "checked";
    } else if (e.target.className === "checked") { //tıklanılan elementte checked classı varsa onu geri aldık
        e.target.className = "liItem";
    }
}

//element silecek fonksiyon

function removeItem(e) {
    if(e.target.className==="fa fa-remove close") {
        let a = e.target.parentElement.parentElement
        removeFromStorage(a.innerText) //veriyi storage'dan silecek fonksiyona yolluyoruz
        a.remove(); //veriyi sildik
    }
};

//local storage'dan todo silecek fonksiyon

function removeFromStorage(listItem) {
    if(localStorage.getItem(tasks)==="") {
        tasks=[];
    } else {
        tasks=JSON.parse(localStorage.getItem(tasks));
    }

    task.forEach(function(task, index){

        if(listItem.textContent == task){
            task.splice(index, 1);
        }
    });
    
    localStorage.setItem('task', JSON.stringify(task));
};