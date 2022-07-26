//FETCH API İLE ÇALIŞMAK//

//JSON dosyadan veri çekmek
fetch("settings.json").then(
    response=> response.json()
    ).then(responseJson=> {
        console.log(responseJson)
        console.log(responseJson.userName)

    })


let userListDOM=document.querySelector("#userList")
//API üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response=>response.json
    ).then(responseJson=>{
        responseJson.forEach(item=>{
            let liDOM=document.querySelector("li")
            liDOM.innerHTML=item.title
            userListDOM.append(liDOM)
        })
    })
