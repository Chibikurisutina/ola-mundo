
import { useEffect, useState } from "react";
import axios from "axios";
import CardPokemon from "../../components/CardPokemon";
import "./styles.css";
import CircularIndeterminate from "../../components/Progresso";


const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  const pegarListaDePokemons = async () => {
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }

    setListaPokemons(listaTemporaria);
  };

  useEffect(() => {
    pegarListaDePokemons();
  }, [referenciasPokemons]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); 
  }, []);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
      <div className="pokemon-container">
        {listaPokemons.map((pokemon) => (
          <CardPokemon
            nome={pokemon.name}
            foto={pokemon.sprites.front_default}
            id={pokemon.id}
            url={pokemon.forms[0].url}
          />
        ))}
      </div>
    
  );
};

export default PokemonPage;