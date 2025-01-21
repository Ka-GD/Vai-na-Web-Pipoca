

//vou colocar a função map
export default function Series (){

   

  const series =[ {
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVAiDgLI4TJ5rOcJvCgJB-qB1QLeCwTNGvA&s',
    Serie: 'Peaky Blinders ',
    Lançamento: 2013,
    descrição:'Seguindo a história da família Shelby, que comanda uma gangue criminosa em Birmingham, Inglaterra, após a Primeira Guerra Mundial, a série mistura drama e ação com uma atmosfera sombria e estilosa.',
    textoAlt:'imagem do serie'
  },
  {
    imagem: 'https://i.ebayimg.com/00/s/MTYwMFgxMDc5/z/aBIAAOSwWAFhz5VD/$_57.JPG?set_id=8800005007',
    Serie: 'The Witcher ',
    Lançamento: 2019,
    descrição:'Baseada na obra de Andrzej Sapkowski, a série segue o caçador de monstros Geralt de Rivia enquanto navega por um mundo cheio de magia, criaturas místicas e complexas alianças políticas.',
     textoAlt:'imagem do serie'
  },
  {
    imagem: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg',
    Serie: 'Game of Thrones',
    Lançamento: 2011,
    descrição:' Baseada nos livros de George R.R. Martin, a série acompanha famílias nobres em uma luta sangrenta pelo Trono de Ferro, em um mundo de intrigas políticas, magia e dragões.',
     textoAlt:'imagem do serie'
  }]
    return(
        <section>
            
          {
            series.map( (item) =>(
                <div>
          <img src={item.imagem} alt={item.textoAlt} />
          <h2>{item.Serie}</h2>
          <h3>Lançamento: {item.Lançamento}</h3>
          <h3>Descrição: {item.descrição}</h3>
          
        </div>
            ))
          }
        </section>
    )
}