// import Counter from "./components/Counter"

import Product from "./components/Product"
import Header from "./components/Header"
import CategoryProvider from "./context/CategoryContext"

function App(){

  return (
    <CategoryProvider>
      <div>
      <Header ></Header>
      <Product></Product>
    </div>
    </CategoryProvider>
    
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