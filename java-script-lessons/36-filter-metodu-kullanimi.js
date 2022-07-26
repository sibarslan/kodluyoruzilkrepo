//FILTER METODU//

//5 harften fazla olanlar

const PRODUCTS=["laptop","phone","speaker","desktop pc","server","mouse","keyboard"]

const NEW_PRODUCTS=PRODUCTS.filter(item=>item.length>5)
console.log(NEW_PRODUCTS)

//aktif kullanıcılar

const USERS=[
    {fullName: "Ayşe Sümer", isActive:false},
    {fullName: "Ahmet Urgan", isActive:true},
    {fullName: "Asya Başar", isActive:true},
    {fullName: "Aksel Durmaz", isActive:false}
]

// const ACTIVE_USERS=USERS.filter(user=>user.isActive===true)
const ACTIVE_USERS=USERS.filter(user=>user.isActive)//default değeri true olduğundan böyle bırakılabilir
console.log(ACTIVE_USERS)

