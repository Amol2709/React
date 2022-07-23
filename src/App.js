// import Counter from "./components/Counter"

import Product from "./components/Product"
import Header from "./components/Header"
import { useState } from "react"

function App(){
  const [selectedCategory, setSelectedCategory] = useState(null)
  console.log("I am in app",selectedCategory)
  return (
    <div>
      <Header setSelectedCategory={setSelectedCategory}></Header>
      <Product selectedCategory = {selectedCategory}></Product>
    </div>
  )
}

// function App(){
//   console.log("App rendered");
//   return (
    
    
//     <div>
//       <h1> My Counter App</h1>
//       <Counter></Counter>
//     </div>
//   )
// }

export default App