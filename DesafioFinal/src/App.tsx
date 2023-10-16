import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastrar from "./Components/Paginas/Cadastrar";
import { Dashboard } from "./Components/Paginas/Dashboard";
import { CadastrarFoto } from "./Components/Paginas/CadastrarFoto";
import Carregamento from "./Components/Paginas/Carregamento";
import { Feed } from "./Components/Paginas/Feed";
import Perfil from "./Components/Perfil";
import { Configuracao } from "./Components/Paginas/Configuracao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Perfil/>}></Route>
        <Route path="/Feed" element={<Feed/>}></Route>
        <Route path="/Cadastrar" element={<Cadastrar/>}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
        <Route path="/Carregando" element={<Carregamento/>}></Route>
        <Route path="/CadastrarFoto" element={<CadastrarFoto/>}></Route>
        <Route path="/Configuracao" element={<Configuracao/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
