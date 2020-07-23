import React, {useEffect, useState} from 'react';
import api from '../service/api'
import axios from 'axios';

const Dashboard = () => {
  const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
      async function loadPokemons() {
        const { data } = await api.get('/pokemon');
        const { results } = data;
        
        const dados = results.map(async(pokemon) => {
          console.log(pokemon)
          const pokemonDados = await axios(pokemon.url)
          return pokemonDados.data

        })    
        const promisseUnica = Promise.all(dados)
        const resultadoFinal = await promisseUnica
        
        setPokemons(resultadoFinal);
      }
      loadPokemons();
    }, []);

  return <div className="retpokemon">  
     

    {pokemons.map((pokemon) => {
      return <div className="resultado-tela">
        <img src={pokemon.sprites.front_default}></img>
        <h2 class="card-title">{pokemon.name}</h2>
     </div>
    })

    }
    </div>;
};

export default Dashboard;
