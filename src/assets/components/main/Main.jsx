import s from '../main/main.module.scss';
import VainaWebPipoca from '../../../assets/VainaWebPipoca.png';
import Sugestoes from '../../../assets/sugestoes.png'; 
import { useState } from 'react';

export default function Main() {
  const [imagemAtual, setImagemAtual] = useState(VainaWebPipoca); 


  const mudarImagem = () => {
    setImagemAtual(imagemAtual === VainaWebPipoca ? Sugestoes : VainaWebPipoca);
  };

  return (
    <main className={s.main}>
      <img
        src={imagemAtual}
        alt="Imagem que alterna entre um balde de pipoca e sugestões de filmes"
        className={s.imagem}
      />
      <button onClick={mudarImagem} >
        Clique aqui
      </button>
    </main>
  );
}
