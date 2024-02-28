import { useEffect, useState } from "react"
import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])


    useEffect(()=>{

        getProducts().then(res =>{  
            setProducts(res)
        }).catch(error =>{
            console.log(error)
        })
    }, [])

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer