//BREAK&CONTINUE KULLANIMI//

const LOREM_LIST=[
    "lorem","ipsum","dolor","amet","consectetur","adipisicing","elit"
]

let counter=0
// for(;counter<10;counter++){
//     console.log(counter)
//     if(counter==5){break} //5te duracağını söyledik bu yüzden 5te sonlanır
// }

// for(;counter<10;counter++){
//     console.log(counter)
//     if(counter==5){continue} //5e geldiğinde 5i atlamasını söyledik, 4ten sonra 6ya geçip 10a kadar devam edecek
// }

const UL_DOM=document.querySelector("#userList")
let index=0

// for(;index<LOREM_LIST.length;index++){
//     if(LOREM_LIST[index]=="dolor") {break}
//     let LI_DOM=document.createElement("li")
//     LI_DOM.innerHTML=LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

for(;index<LOREM_LIST.length;index++){
    if(LOREM_LIST[index]=="dolor") {continue}
    let LI_DOM=document.createElement("li")
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}