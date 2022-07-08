//LOCAL STORAGE İÇİNDE FARKLI TÜRDE VERİ SAKLAMAK//

//localStorage a ulaşmak için inspect>application>local storage

let user={userName:"hakanyalcinkaya",isActive:true}
console.log(user)
localStorage.setItem("userInfo",JSON.stringify(user))

let userInfo=localStorage.getItem("userInfo") //bilgiyi al
userInfo=JSON.parse(userInfo)
console.log(userInfo)

