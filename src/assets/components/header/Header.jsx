import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import s from './header.module.scss';
import Main from "../main/Main"; // Certifique-se de que este arquivo existe
import Filmes from "../../../pages/filmes/Filmes"; // Certifique-se de que este arquivo existe
import Series from "../../../pages/series/Series";
export default function Header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
       
        <nav>
          <Link to="/">Início</Link>
          <Link to="/filmes">Filmes</Link>
          <Link to="/series">Séries</Link>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
