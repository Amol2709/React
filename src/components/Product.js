import React from "react";
import useApi from "../hooks/useApi";
import {useCategoryContext} from "../context/CategoryContext"

function Product(){
    const {selectedCategory} = useCategoryContext()
    console.log("I am in product",selectedCategory)
    const {data} = useApi(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    console.log(data)

    return (
        <div className="products">
            {data.map((prod,index)=>(
                <div className="product" key={index}>
                  {prod.title}
                  <img  alt="yo" className="product-image" src={prod.image}></img>  
                </div>
            ))}
        </div>
    )

}

export default Product