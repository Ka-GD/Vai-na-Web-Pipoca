import './filmes.scss'

//vou colocar a função map
export default function Filmes (){

    //função map
    //estrutura do array
  //variavel nome =['intem1','item2','item3']

  const filmes =[ {
    imagem: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/12/Furiosa-poster.jpeg',
    filme: 'Furiosa: Uma Saga Mad Max',
    Lançamento: 2024,
    descrição:'A história de origem de Furiosa, explorando sua luta para sobreviver e encontrar seu caminho em um mundo pós-apocalíptico dominado por tiranos.',
    textoAlt:'imagem do filme'
  },
  {
    imagem: 'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg',
    filme: 'Spider-Man: Longe de Casa ',
    Lançamento: 2019,
    descrição:'Peter Parker tenta levar uma vida normal enquanto viaja para a Europa, mas logo é envolvido em uma nova ameaça representada por Mysterio, um vilão com habilidades ilusórias.'
  },
  {
    imagem: 'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177685221/poster-os-vingadores-ultimato-c-b393d9a3.jpg',
    filme: 'Vingadores: Ultimato',
    Lançamento: 2019,
    descrição:'Os Vingadores se reúnem para uma última batalha contra Thanos, depois que ele dizimou metade da vida no universo com as Joias do Infinito. Eles devem encontrar uma maneira de desfazer a destruição.',
    textoAlt:'imagem do filme'
  }]
    return(
        <section>
            
          {
            filmes.map( (item) =>(
                <div>
          <img src={item.imagem} alt={item.textoAlt} />
          <h2>{item.filme}</h2>
          <h3>Lançamento: {item.Lançamento}</h3>
          <h3>Descrição: {item.descrição}</h3>
          
        </div>
            ))
          }
        </section>
    )
}