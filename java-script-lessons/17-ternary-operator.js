//TERNARY OPERATÖRÜYLE SHORT IF KULLANIMI//

//eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunmadı yaz

let userName=prompt("kullanıcı bilginizi yazınız")
let info=document.querySelector("#info")


//ternary kullanımı:
//koşul? doğruysa: yanlışsa

info.innerHTML=`${userName.length>0} ? username : "kullanıcı bilginiz bulunmadı`