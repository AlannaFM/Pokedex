
import './App.css';
import pokeball from './imagens/Vector.svg';
import Card from './componentes/Card.jsx';
import { useEffect, useState } from 'react';
import vetorPesquisa from './imagens/imgPesquisa.png';

export default function App() {

  const [pokemons, setPokemons] = useState(null);

  const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon/?&limit=9")

  {/*https://pokeapi.co/api/v2/pokemon/ditto */ }

  {/*  https://pokeapi.co/api/v2/pokemon/?&limit=9*/ }




  useEffect(() => {
    async function buscarPokemons() {
      const catchPokemon = await fetch(api)
      const dados = await catchPokemon.json();
      setPokemons(dados);
    }
    buscarPokemons();
  }
  )

  if (!pokemons) {
    return (<p>carregando</p>)
  }
  else {

    return (
      <div className='App'>
        <header>
          <img src={pokeball} />
        </header>
        <main>

          <div className='conteudo'>
            <div className="input-container">
              <input className="barra-pesquisa" type="text" placeholder="Pesquisar pokémon" />
              <img src={vetorPesquisa} className="icone-pesquisa" />
            </div>

            <div className='espaco-titulo'>
              <h1 className='titulo'>Pokédex</h1>
            </div>
            <div className='pokemons-cards'>
              {/* {pokemons.results.map(pokemon => <Card url={pokemon.url} />)} */}
              {pokemons.results.map((pokemon, index) => {
                const linha = Math.floor(index / 3);
                let corClasse = '';

                if (linha === 0) corClasse = 'linha-verde';
                else if (linha === 1) corClasse = 'linha-laranja';
                else if (linha === 2) corClasse = 'linha-azul';

                return (
                  <div className={`linha-card ${corClasse}`} key={index}>
                    <Card url={pokemon.url} />
                  </div>
                );
              })}

            </div>
          </div>
        </main>

      </div>

    )

  }

}





