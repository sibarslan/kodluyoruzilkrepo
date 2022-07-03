//KOŞULLARLA ÇALIŞMAK//


let username=prompt("kullanıcı adınızı giriniz:")

//eğer kullanıcı bilgisi varsa ekrana ismini yazdır
//eğer (username.lenght>0) {console.log(username)} değilse {console.log("bilgi yok")}
//if (username.lenght>0) {console.log(username)} else {console.log("bilgi yok")}

if (username.length>0) { // if kısmı her zaman true ise çalışır
    console.log(`kullanıcı bilginiz: ${username}`)
}
else {
    console.log("bilgi yok")
}

