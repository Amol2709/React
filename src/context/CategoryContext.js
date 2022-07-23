import {createContext, useContext, useState}  from "react"

export const CategoryContext = createContext();

export default function CategoryProvider({children}){
    const [selectedCategory, setSelectedCategory] = useState(null)
    return (
        <CategoryContext.Provider 
        value={{
            selectedCategory,
            setSelectedCategory
        }}
        >
           {children} 
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = ()=> useContext(CategoryContext)