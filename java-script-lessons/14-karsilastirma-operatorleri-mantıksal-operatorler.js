//KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER//

//KARŞILAŞTIRMA OPERATÖRLERİ//

let price="100"
let user="guest"

// == eşitse (değer bakımından)

console.log(price==1) // false
console.log(price==100) //true

// === hem değeri hem türü eşitse

console.log(price===100) //false
console.log(price==="100") //true


// != eşit değilse

console.log(price!=1) //true çünkü eşit değil
console.log(user!=guest) //false çünkü eşit

// < küçükse

// <= küçük eşitse

// > büyükse

// >= büyük eşitse

//////////////////////

//MANTIKSAL OPERATÖRLER//

// && ve
price=0
console.log(price>0 && user !="guest") //false, iki değerin de sağlanması gerek yoksa false döner

// || veya

console.log(price>0 || user !="guest") //true, iki değerden birinin sağlanması yeterli


// ! değil (tersi)

user="guest"
price=1
console.log(price>0 && !user =="guest") //false, normalde true dönen değerin tersini alır o yüzden false
