import {BrowserRouter, Routes, Route} from  "react-router-dom"

import { NavBar } from './components/NavBar';
import { ItemsListContainer } from "./components/ItemsListContainer";
import { ItemsDetailsContainer } from "./components/ItemsDetailsContainer";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemsListContainer/>}></Route>
          <Route path="/category/:id" element={<ItemsListContainer/>}></Route>
          <Route path="item/:id" element={<ItemsDetailsContainer/>}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

