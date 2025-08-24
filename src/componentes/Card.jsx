import { useState, useEffect } from 'react'
import '../App.css'

export default function Card(props) {

    useEffect(() => {
        async function buscarPokemon() {
            const pokemon = await fetch(props.url);
            const dados = await pokemon.json();
            setPoke(dados);
        }
        buscarPokemon();
    })

    const [poke, setPoke] = useState(null);

    if (!poke) {
        return <p>Carregando...</p>
    }
    else {
        return (
            <div className='card'>
                <div className='info-card'>
                <h3 className='nome-pokemon'>{poke.name}</h3>
                 {poke.types.map(type => <a>{type.type.name}</a>)}          
                </div>
                <div className='container-img'>
                    <img className='img-card' src={poke.sprites.front_default}></img>
                </div>               
                

            </div>
        )
    }


}