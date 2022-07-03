//NUMBER//

//number veri türü tanımlamak:

let price=100
let tax=0.18
let tpriceTax=price*tax
let total= price+priceTax
console.log(
    "fiyat:", price, 
    "KDV oranı:", tax, 
    "KDV tutarı:", priceTax,
    "Fiyat:", total )

let stringNumber="11"
console.log(stringNumber)
let newNumber=Number(stringNumber)
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi:", Number("111"))
//artırma ve azaltma işlemleri:

let counter=320
counter=counter+1 //uzun yol
counter+=1; //kısa yol
counter++; // en kısa yol
console.log(counter)

counter--
counter-=1;
console.log(counter)

counter*=10;
console.log(counter)

counter/=2;
console.log(counter)

//işlem önceliği:

console.log(2+3*10) // ->32
console.log( (2+3)*10) // ->50


//mod (kalan) alma %:

// 1- sayı tek mi çift mi?
console.log(14%2) // -> 0 ise çift sayı, 1 ise tek sayı

// 2- 8 ürün alan koliye tüm ürünler sığıyor mu?
console.log("Koli Kalan Ürün Örneği: ", 18%8)

//üs alma **

console.log(2*2*2*2)
console.log(2**4)

//aşağı yuvarlama işlemi -> Math.floor:

console.log(Math.floor(1.7)) // 1

//yukarı yuvarlama işlemi -> Math.ceil:

console.log(Math.ceil(1.1)) // 2

//yakına yuvarlama işlemi -> Math round:
console.log(Math.round(1.4)) //1
console.log(Math.round(1.5)) //2 


