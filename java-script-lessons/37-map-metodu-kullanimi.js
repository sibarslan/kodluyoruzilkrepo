//MAP METODUYLA ARRAY İÇİNDEKİ YAPININ DEĞİŞTİRİLMESİ//

const USERS=["AYŞE","MehMet","TuğÇE","AkSEL"]

//userName içinde orijinal isim kalsın
//shortName için de ilk harf büyük
//newName içinde ilk harf büyük olsun
//{userName:"AYSE", shortName:"A.",newName="Ayşe"}

const NEW_USERS=USERS.map(user=>user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ=USERS.map(item=>
//     {
//         return {
//             userName:"AYSE", shortName:`${item[0]}`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     }
// )

const USERS_OBJ=USERS.map(item=>(
    {userName:"AYSE", shortName:`${item[0]}`,newName:`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
)) //return kullanmak yerine () içerisine alabiliriz

console.log(USERS_OBJ)