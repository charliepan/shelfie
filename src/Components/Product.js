import React from 'react'

const Product = ({image_url,product_name,price}) => {
    return (
            <div>
                <img src={image_url} alt="" width="250" height="250"/>
                <h3>{product_name}</h3>
                <h4>{price}</h4>
            </div>
        )
}
export default Product;