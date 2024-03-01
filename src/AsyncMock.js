const products = [
    {
        id: "1",
        name: "iphone 14",
        price: 1000,
        category: 'celular',
        stock: 20,
        description: "Descripcion iphone 14"
    },
    {
        id: "2",
        name: "iphone 13",
        price: 2000,
        category: 'celular',
        stock: 20,
        description: "Descripcion iphone 13"
    },
    {
        id: "3",
        name: "iphone 15",
        price: 3000,
        category: 'celular',
        stock: 20,
        description: "Descripcion iphone 15"
    },
]

export const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products)
        },1500)
    })
}
