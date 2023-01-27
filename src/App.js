
import Navbar from "./Navbar"
// import Pricing from "./pages/catalogue/catalogue"
//import Home from "./pages/Home"
// import About from "./pages/panier/panier"
import { Route, Routes } from "react-router-dom"
import {Shop} from './pages/catalogue/catalogue.jsx'
import {Cart} from './pages/panier/panier.jsx'
import { ShopContextProvider } from "./context/shop-context"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/" element={<Shop />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
        </ShopContextProvider>
      </div>
    </>
  )
}

export default App