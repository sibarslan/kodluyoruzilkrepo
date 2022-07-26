//OBHECT DESTRUCTING//

let settings={
    userName:"loremIpsum",
    password:"BasPassword",
    isActive:false,
    ip:"127.0.0.1",
    serverName:"kodluyoruz.org"
}

//obje içindeki bilgilerin tek seferde çıkarılması

// let userName=settings.userName
// console.log(userName)

//rename & destructing 
let {userName: user,password,isActive,ip: serverIP,serverName}=settings
console.log(user,password,isActive,serverIP,serverName) 
console.log(settings)
console.log(user)

//obje içindeki bazı bilgilerin çıkarılması

let {userName:userName2, password:password2, isActive:isActive2, ...newSettings}=settings

//eğer değişken ismi önceden tanımlanmadıya
//let {userName, password, isActive, ...newSettings}=settings
console.log(userName2,password2,isActive2,newSettings)

//objenin destructing ile kopyalanması

//HATALI

// let settings2=settings
// settings2.userName="değişen bilgi"
// console.log(settings,settings2)

//DOĞRUSU

let settings2={...settings}
settings2.userName="değişen bilgi"
console.log(settings,settings2)

let score=[100,200,300,400]
let [score1,score2, ...otherScore]=score

//object kopyalama ile aynı 
let copyOfScore=[...score]
console.log(copyOfScore)