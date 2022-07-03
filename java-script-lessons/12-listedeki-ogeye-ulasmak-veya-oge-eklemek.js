//LİSTEDEKİ BİR ELEMANA ULAŞMAK VE ELEMAN EKLEMEK//

let lastChild=document.querySelector("ul#list>li:last-child")
lastChild.innerHTML="son öge değişti"
console.log(lastChild)

let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement("li")
liDOM.innerHTML="kendi oluşturduğumuz öge"

//ulDOM.append(liDOM) //-> sona ekler
ulDOM.prepend(liDOM) //-> başa ekler