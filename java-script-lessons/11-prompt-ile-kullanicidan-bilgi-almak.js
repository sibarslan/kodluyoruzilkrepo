//PROMPT İLE KULLANICIDAN BİLGİ ALIMI//

let fullName=prompt("lütfen adınızı giriniz") // -> boş bırakılırsa ekrana çıkan pencereden değer girildiğinde hiçbir değer dönmez

let greeting=document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small style="color:red">${fullName}</small>`
