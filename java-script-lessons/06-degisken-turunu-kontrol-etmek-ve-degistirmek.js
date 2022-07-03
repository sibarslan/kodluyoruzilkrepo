//VERİ TÜRÜNÜ ÖĞRENMEK VE VERİ TÜRÜ DÖNÜŞÜMLERİ//

//veri türünü öğrenmek typeof():

let price=111
let stringPrice="111"
let hasPassword=true
console.log(
    "price: ",
    typeof(price)

    "stringPrice: ",
    typeof(stringPrice)

    "hasPassword: ",
    typeof(hasPassword)
)

//string bilgileri int ve float'a dönüştürmek

let number1="11"
number1=parseInt(number1)
console.log("number1: ", number1, typeof(number1))


let number2="11px"
number2=parseInt(number2)
console.log("number2: ", number2, typeof(number2))

let number3="11px"
number2=Number(number3)
console.log("number3: ", number3, typeof(number3))

let number4="11.4px"
number2=parseFloat(number4)
console.log("number4: ", number4, typeof(number4))

//number veri tipinden string'e dönüştürmek
let number5=55
number5=number5.toString()
console.log("number5: ", number5, typeof(number5))