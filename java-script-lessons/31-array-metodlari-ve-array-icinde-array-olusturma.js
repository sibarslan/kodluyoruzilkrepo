//ARRAY METODLARI VE ARRAY İÇİNDE ARRAY OLUŞTURMA//

let items=[1,2,3,4,5]

//array içinde array
let femaleUsers=["ayşe","hülya","merve"]
let maleUsers=["ahmet","hasan","mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items) // 7 elemanlı olur çünkü diğer arrayleri 1 eleman sayar
console.log(items[0][0]) // ayşe

//array içinden öge ayırmak -> splice(pos,item?)

let newItems=items.splice(1,5) //1. indexten 5. indexe kadar
console.log(newItems,items)

//array içindeki ögenin index bilgisini bulmak -> indexOf("value")

items.unshift("lorem")
items.push("ipsum")
console.log(items.indexOf("ipsum"))

//array kopyalamak -> slice(), [...ES6]

let copyItems=items
console.log(items)

copyItems.pop() //son ögeyi çıkarttık
console.log(copyItems)
console.log(items)

console.log("kopyalandıktan sonraki hali")
copyItems=items.slice()
copyItems.pop() //son ögeyi çıkarttık
console.log(copyItems)
console.log(items)

let es6Items=[...items] //es6 ve sonrasında gelen kopyalama işlemi
console.log(es6Items)

//iki array bilgisini birleştirmek -> [...ES6, ...ES6]

let allUsers=[...femaleUsers,...maleUsers] //es6 ile birden fazla array yapısını birleştirmek
console.log(allUsers)

//array içindeki bilgiyi stringe çevirmek -> toString, join

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

//istediğimiz indexe öge eklemek -> splice(index,0,value)

allUsers.splice(allusers.length-1,0,"melisa")
allUsers.splice(Math.floor(allUsers.length/2),0,"lorem")
console.log(allUsers)
