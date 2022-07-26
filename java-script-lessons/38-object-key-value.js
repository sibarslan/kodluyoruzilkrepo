//OBJECT KEY-BALUE YAPISI//

//{key1:1, key2:2, ...}
let laptop1={
    brand:"apple",
    model:"macbook pro",
    // model-name:"macbook pro", //hata
    // model_name:"macbook pro", //hata
    // modelName:"macbook pro", //kullanılabilir
    "2kg":2, //numeric olarak başlayacaksa tırnak içine alınmalı
}

//doğru anahtar bilgisi oluşturmak

console.log(laptop1.brand) // veya laptop1["brand"]
console.log(laptop1.model)
console.log(laptop1["2kg"]) 

//anahtar bilgisine yeni değer eklemek

laptop1.brand="Mac"
laptop1["brand"]="Mac1"
console.log(laptop1)

//yeni bilgi eklemek 

laptop1.version="10.15.7"
console.log(laptop1)

//anahtar bilgilerine ulaşmak -> Object.keys(item)

keys=Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo=> {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})


//değer bilgilerine ulaşmak -> Object.values(item)

console.log(
    Object.values(laptop1)
)

let values=Object.values(laptop1)

values.forEach(value=> {
    console.log("value:", value)
})