
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import Pokemons from "../views/Pokemons";


const TablePokemons = ({  handleEdit }) => {

  const { filteredPokes } = useContext(PokeContext);

  return (
    <>
     {
        filteredPokes.length === 0 && 
        <span aria-label="span">No Existen pokemones</span>
      }
    <table className="table_container">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
       
        {
            filteredPokes?.map(pokemon => (
                <Pokemons 
                  key={ pokemon.name } 
                  pokemon={pokemon}                  
                  handleEdit = { handleEdit }
                  />
            ))
        }
       
      </tbody>
    </table>
    </>
  );
};

export default TablePokemons;
