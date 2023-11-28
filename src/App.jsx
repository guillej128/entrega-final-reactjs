import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ItemListcontainer } from "./Components/ItemListContainer"
import NavBar from './Components/NavBar';
import { ItemsDetailsContainer } from './Components/ItemDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListcontainer />} />
        <Route path='/category/:id' element={<ItemListcontainer/>} />
        <Route path='/item/:id' element={<ItemsDetailsContainer/>} />
        <Route path='*' element={<>error 404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
