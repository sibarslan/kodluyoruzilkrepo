// STRING VERİ TÜRÜ VE İŞLEMLERİ//


let email="hakanyalcinkaya@gmail.com"
let firstName="hakan"
let lastName="YALÇINKAYA"

//string karakter sayısı -> length

console.log(email.length)

// ilk karakteri bulmak -> [0]

console.log(firstName[0])
console.log(firstName.charAt(0))

//büyük harf/küçük harf:

firstName=firstName.toUpperCase()
console.log(firstName)


//string içinde istediğimiz bilgiyi aramak ve yerini bulmak search():

console.log(email.search("@")) // -> 0 getirir çünkü var
console.log(email[15])
console.log(email.search("xxcxc")) // -> -1 getirir çünkü yok

//beli bir yere kadar al -> slice:

email.slice(1,10) // indexi 1den 10a kadar olan kısmı alır

let DOMAIN=email.slice(email.search("@")) +1 // +1 @ işaretini almamak için eklendi yani 16. indexten itibaren alacak
console.log(DOMAIN)
console.log(DOMAIN.slice(0,DOMAIN.indexOf(".")))

//bilgiyi değiştir replace:

email=email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

//istediğim bilgi var mı -> includes:

console.log(email.includes("@")) // true veya false döndürür, var olduğu için true

//istediğim bilgiyle başladı mı ya da bitti mi startsWith, endsWith:

console.log(email.endsWith("kodluyoruz.org"))

//Baş harfleri büyük yapmak:

firstName="FIRST"
lastName="LAST"

let fullName=`${firstName[0].toUpperCase()} ${firstName.slice(1)} ${lastName[0].toUpperCase()} ${lastName.slice(1).toLowerCase()}}` //0. indexle baş harfini büyütüp slice(1) diyerek baş harften sonraki tüm harfleri küçülttük.