//FOREACH METODU//

const PRODUCTS=["laptop","phone","speaker","desktop pc","server","mouse","keyboard"]

// PRODUCTS.forEach((product,index,array)=>array[index]=product+"111")
PRODUCTS.forEach((product,index,array)=>array[index]=product+`${product.toUpperCase()}`)

console.log(PRODUCTS)

/*

const=userListDOM=document.querySelector("#userList")

for(index=0;index<users.length;index++){ //genelde i olarak kullanılıyor ama açıkça index de yazılabilir
    liDOM=document.createElement("li")
    liDOM.innerHTML=users[index]
    userListDOM.appendChild(liDOM)
}
*/

const userListDOM=document.querySelector("#userList")
PRODUCTS.forEach(item=> {
    const liDOM=document.createElement("li")
    liDOM.innerHTML=item
    userListDOM.appent(liDOM)
})