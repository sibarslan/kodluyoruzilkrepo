//DİZİ OLUŞTURMAK VE DİZİDEKİ ELEMANLARA ULAŞMAK//

//array oluşturmak

let domain="kodluyoruz"
isActive=false
let items=[15, 25, 35, isActive, domain]
console.log(items)

let emptyArray=[] //boş liste

//array içindeki eleman/öge sayısını öğrenmek

console.log(items.length)

//array içindeki ilk elemanın çağırılması

console.log(items[0])

//array içinde ortadaki elemanın çağırılması

console.log(items[Math.floor(items.lenght/2)])

//array içindeki son elemanın çağırılması

console.log(items[items.length-1])

//değişken içindeki  bilginin array olup olmadığının kontrol edilmesi

console.log(typeof(items)) //object olarak çıktı verir
console.log(Array.isArray(items))

//hangileri isArray=>true verir

console.log(Array.isArray[]) //true
console.log(Array.isArray(1)) //false
console.log(Array.isArray(true)) //false

