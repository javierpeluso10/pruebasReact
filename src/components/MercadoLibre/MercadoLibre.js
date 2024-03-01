import {useState} from 'react'

const MercadoLibre = () =>{

    const [products , setProducts] = useState([])
    const [input, setInput] = useState('')

    const buscarProductos = () =>{
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            }).then(response => setProducts(response.results))
            .catch(error => console.log(error))
    }

    return(
        <div>
            <h1>MercadoLibre</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={buscarProductos}>Buscar</button>
            {products.map(product =><div key={product.id}>
            <img src={product.thumbnail} alt={product.title}/>{product.title}
            </div>)}
        </div>
    )
}

export default MercadoLibre