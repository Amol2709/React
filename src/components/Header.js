
import React from "react"
import useApi from "../hooks/useApi";


function Header({setSelectedCategory}){
    const {data:categories} = useApi('https://fakestoreapi.com/products/categories/')
    

    return (
        <div className="header-items">
            {categories.map((category,index)=>(
              
                <div onClick={()=>setSelectedCategory(category)} className="header-item" key={index}>
                 
                      {category}
                 
                </div>
            ))}
               

        </div>
    )
}

export default Header