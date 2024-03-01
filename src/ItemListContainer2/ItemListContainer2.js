import { getProducts } from "../AsyncMock"
import {useEffect, useState} from 'react'
import ItemList from "../components/ItemList/ItemList"

const ItemListContainer2 = () =>{

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((products) => {
            setProducts(products)
        }).catch((err) => {
            console.log(err)
        });
    },[])

    return(
        <div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer2
