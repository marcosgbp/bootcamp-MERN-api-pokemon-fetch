import React, { useState } from "react";

const Pokemones = () => {
  const [listaPokemones, setListaPokemones] = useState([]);
  const getPokemones = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        let pokemones = response.results;
        setListaPokemones({
          ...listaPokemones,
          pokemones,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mt-2 text-center">
      <button onClick={getPokemones} className="btn btn-success">Fetch Pokemon</button>
      <h2>Lista de Pokemones</h2>
      <ul>
        {listaPokemones.length === 0 ? (
          <p>No hay pokemones que mostrar</p>
        ) : (
          listaPokemones.pokemones.map((el, index) => {
           return <li className="d-flex flex-row justify-content-center" key={index}>{el.name}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default Pokemones;
