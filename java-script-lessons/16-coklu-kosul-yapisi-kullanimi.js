//ÇOKLU KOŞULLARLA ÇALIŞMAK//

let userName= prompt("kullanıcı adınız:")
let age=prompt("yaşınız:")
let info=document.querySelector("#info")

if (userName && age>=18) {
    info.innerHTML="ehliyet alabilir"
}
else if(!userName) {
    info.innerHTML="kullanıcı adınız yok"
}
else if(!(age>=18)) {
    info.innerHTML="yaş bilginiz yok veya 18 yaşından küçüksünüz"
}


