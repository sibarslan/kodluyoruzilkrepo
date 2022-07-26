//ARRAY YAPISINA ÖGE EKLEMEK VE ÇIKARTMAK//

let items=[10,20,30,40]
console.log("items-ilk hali:", items)

//sona öge/eleman eklemek -> push()

items.push(50)
console.log(items)

//başa öge eklemek -> unshift()

items.unshift(5)
console.log(items)

//sondaki ögeyi çıkartmak -> pop()

let lastItem=items.pop() //son elemanı lastItem içine ekledik
console.log(lastItem,items)

//baştaki ögeyi çıkartmak -> shift()

let firstItem=items.shift() //ilk elemanı firstItem içine ekledik
console.log(firstItem,items)

//array içindeki bir ögenin bilgisinin değiştirilmesi

items[0]=5; //ilk öge
console.log(items)

items[items.length-1]=1000; //son öge
console.log(items)