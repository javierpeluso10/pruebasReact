const Item = ({product}) =>{

    return(
        <div>
            <h3>{product.name}</h3>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
        </div>
    )

}

export default Item