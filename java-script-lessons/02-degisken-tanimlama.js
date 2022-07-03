// LET VE CONST İLE DEĞİŞKEN TANIMLAMAK //

// var ile değişken tanımlamak:

//var serverName="kodluyoruz.org"
//console.log(serverName)

//let ile değişkeni boş tanımlamak:

let serverName;
console.log(serverName) //undefined

//let ile değişkene bilgi atamak:

serverName= "https://kodluyoruz.org"
console.log(serverName)

//let ile değişkene bilgi atayarak tanımlamak:

let password="1234";
console.log(password)

//değişken ataması yapmadan önce kullanmaya çalışmak:

/* HATALI KULLANIM:
console.log(fullName)
let fullName="Hakan Yalçınkaya" //error
var fullName="Hakan Yalçınkaya" //undefinded
*/

//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek;

let fullName="Hakan Yalçınkaya"
fullName="Lorem Ipsum Dolor";
console.log(fullName) //lorem ipsum dolor

//birleştirme veya ekleme işlemi:

console.log(fullName+" test bilgisi") //ekle ve göster ama değişkeni değiştirme

fullName = fullName + " yeni eklenen bilgi"
fullName = "ikinci bilgi" + fullName

fullName= "Sıfırlandı"
fullName+= " ve yeni bilgi eklendi"
console.log(fullName)

//const ile değişken tanımlamak:

const SERVER_PASSWORD="jksldşcf"
console.log(SERVER_PASSWORD)
//const SERVER_PASSWORD("1234")
//console.log(SERVER_PASSWORD) error, const ile tanımlı olduğu için değer değişemez

//const ile değişkeni boş tanımlamaya çalışmak:

// const SERVER_PASSWORD; //sadece değişken tanımlandı ama içi boş, error
