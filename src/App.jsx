import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar } from './components/NavBar';
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailsContainer } from "./components/itemDetailsContainer";
import { Contacto, Agenda, Inicio } from "./components/Pages";
import { Login } from "./Pages/Login";
import { Registro } from "./Pages/Registro";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/productos" element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="item/:id" element={<ItemDetailsContainer />}></Route>
          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

