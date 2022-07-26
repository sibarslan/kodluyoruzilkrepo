//FORMLARLA ÇALIŞMAK BÖLÜM SONU//

/*
1-FORMU SEÇ
2-INPUT BİLGİSİNİ UL İÇİNE EKLE
3-FORM İÇİNDEKİ BİLGİYİ SIFIRLA
4-EĞER FORMA BİLGİ GİRİLMEZSE KULLANICIYI UYAR
*/

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("sumbit", formHandler)

const alertDOM=document.querySelector("#alert")

const alertFunciton=(title,message,className="warning")=>`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#userName")
    const SCORE = document.querySelector("#score")
    if(userName.value&&score.value) {
        addItem(USER_NAME.value,SCORE.value) //gönderdikten sonra bilgileri sıfırladık
        USER_NAME.value=""
        SCORE.value=""
    } else {
        alertDOM.innerHTML=alertFunciton("başlık bilgisi","hatalı/eksik bilgi girildi")
    }
}


let userListDOM=document.querySelector("#userList")

const addItem=(username, score)=>{
    let liDOM=document.createElement("li")
    liDOM.innerHTML=`${userName} 
    <span class="badge badge-primary badge-pill" >${score}</span >`
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    userListDOM.append(liDOM)
}