//FONKSİYONA PARAMETRE-LER ATAMAK VE FONKSİYONDAN GERİ DÖNÜŞ ALMAK//

//temel kurallar:
//1- bir fonksiyon bir veya birden fazla parametre alabilir, ya da hiç almayabilir.
//2- bie fonksiyon dışarı gönderilebilir (return) veya gönderilmeyebilir.
//3- mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir


let firstName="Lorem"

function greetings(firstName="", lastName="") {//default parametre alıyor
    // console.log(`merhaba ${firstName?firstName:""}`)
    console.log(`merhaba ${firstName}`)
    console.log(`merhaba ${firstName} ${lastName}`)

}

console.log(firstName) //değişken
greetings() //fonksiyona parametre göndermedik
greetings("parametre")


function greetings2(firstName, lastName) {
    let info=`merhaba ${firstName} ${lastName}` //fonksiyon içinde tanımladığı için bu fonksiyona özel (local)
    return info
}

let greetingsInfo=greetings2("ad", "soyad")
//let info="deneme" //hata verir çünkü info tanımlı, fakat function içindeki ve dışındaki infolar birbiriyle bağdaşmıyor
console.log(greetingsInfo)


function domIdWriteInfo(id,info) {
    let domObject=document.querySelector(`${id}`)
    domObject.innerHTML=info
}

let htmlInfo=`<span style="color:red">color REDDDD</span>` 

domIdWriteInfo("greeting",htmlInfo)
domIdWriteInfo("info",greetings2("lorem","ipsum"))
