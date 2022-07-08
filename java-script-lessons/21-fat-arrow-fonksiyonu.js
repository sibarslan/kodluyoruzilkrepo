//ARROW FUNCTION (=>) KULLANIMI//

function hello(firstName){
    console.log(`merhaba ${firstName}`)
}

hello("javascript")


const helloFuncV1=(firstName)=>{console.log(`merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2=firstName=>console.log(`merhaba ${firstName}`) //birer parametre ve işlem yapıldığı için {} gerekli değil
helloFuncV2("helloFuncV2")

const helloFuncV3=(firstName,lastName)=>console.log(`merhaba ${firstName} ${lastName}`)
helloFuncV3("helloFuncV3")


const helloFuncV4=firstName=>{
    let info=`merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4")