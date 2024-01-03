import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from "./Components/NavBar" ;
import {ItemListContainer} from "./Components/ItemListContainer";
import {ItemDetailContainer} from "./Components/ItemDetailContainer";
import {Error404} from "./Components/Error404";
import { CartProvider } from './contexts/CartContext';
import {Cart} from "./Components/Cart";
  
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
