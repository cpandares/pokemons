import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokeContext";
import { getPoke } from "../helpers/getPoke";

const Pokemon = ({ id }) => {

  
  const { updatePoke } = useContext(PokeContext);
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getPoke(id)
      .then((data) => {
        
        setLoading(false);
        setPokemon(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const { name, image,  hp, type, id_author, attack,defense } = pokemon;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePoke({ id, name, image,  hp, type, id_author, attack,defense });
}
  
  return (
    <form className="card" onSubmit={ handleSubmit }>
      <h2>Edit Pokemon</h2>

      {loading && <p>Cargando...</p>}

      <div className="section_actions">
        <div className="details">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            className="input_name"
            name="name"
            value={ name || "" }
            onChange={ e=> setPokemon({ ...pokemon, name: e.target.value })  }
          />

          <div className="input_defense">
            <label htmlFor="ataque">Ataque: </label>
            0 &nbsp;
            <input
              type="range"
              min={0}
              max={100}
              name="attack"
              autoComplete="off"
              title={attack}
              value={attack || 0}
              onChange={ e=> setPokemon({ ...pokemon, attack: e.target.value })  }
            />{" "}
            100
          </div>
        </div>

        <div>
          <div className="input_defense">
            <label htmlFor="defense">Defensa: </label>
            0 &nbsp;
            <input
              type="range"
              name="defense"
              min={0}
              max={100}
              title={defense}
              value={defense || 0}
              onChange={ e=> setPokemon({ ...pokemon, defense: e.target.value })  }
            />{" "}
            100
          </div>
          <label htmlFor="image">Imagen: </label>
          <input
            type="url"
            className="input_image"
            name="image"
            value={image || ""}
            onChange={(e) => setPokemon({ ...pokemon, image: e.target.value })}
          />
        </div>
      </div>
      <div className="buttons_actions">
        <button className="save_button" type="submit">
          Guardar
        </button>
        <button className="cancel_button">X Cancelar</button>
      </div>
    </form>
  );
};

export default Pokemon;
