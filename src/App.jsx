import {BrowserRouter, Routes, Route} from  "react-router-dom"

import { NavBar } from './components/NavBar';
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route path="item/:id" element={<ItemDetailsContainer/>}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

