//HATA YÖNETİMİ İÇİN TRY VE CATCH KULLANIMI//

let products;

try {
    products.forEach(item=> console.log(item));
    catch{error} {
    console.log(error)
    // products=[1,2,3]
    // products.forEach(item=> console.log(item));
    }
} 

products.forEach(item=> console.log(item));

console.log("hata yönetimi düzgün çalışıyor")

let info="kodluyoruz"
console.log(info)