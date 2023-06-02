import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";




const Pokemons = ({ pokemon,  handleEdit }) => {

  const { handleDelete } = useContext(PokeContext);


    return (
      
       <tr>
          <td>{ pokemon.name }</td>
          <td>
            <img src={ pokemon.image } alt={ pokemon.name } className="poke_img" />
           </td>
          <td>
            { pokemon.attack }
          </td>
          <td>
            {
                pokemon.defense
            }
          </td>
          <td>
            <span className="edit_button" aria-label="edit" onClick={ ()=>handleEdit(pokemon.id)} >
                <i className="fas fa-edit"></i>
            </span>

            <span className='delete_button' aria-label="delete" onClick={ ()=>handleDelete(pokemon.id) }>
                <i className="fas fa-trash-alt"></i>              
            </span>
          </td>
        </tr>
    );
};

export default Pokemons;