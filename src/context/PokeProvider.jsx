import { useMemo, useRef, useState } from 'react';
import { deletePoke } from '../helpers/deletePoke';
import { editPoke } from '../helpers/editPoke';
import { savePoke } from '../helpers/savePoke';
import useGetPokemons from '../hooks/useGetPokemons';
import { PokeContext } from './PokeContext';

import Swal from 'sweetalert2';
const PokeProvider = ({ children }) => {

    const [search, setSearch] = useState('');   
    const searchInput = useRef(null);
    const { pokemons, setPokemons, error } = useGetPokemons([]);

    const addPokemon = ({ id, name,image,attack, defense, hp, type, idAuthor})=>{

        if(pokemons.filter(pokemon => pokemon.name === name).length > 0){
          Swal.fire('Este pokemon ya existe')
          return;
        }
    
       
        savePoke({ id, name,image,attack, defense,hp, type, idAuthor });
       
        setPokemons([ ...pokemons, {
          id,
          name,
          image,
          attack,
          defense,
          idAuthor
        }])
        
      
    }

    const updatePoke = ({id, name, image, attack, defense, hp, type, id_author})=>{
 
       try {
        editPoke({ id, name, image, attack, defense, hp, type, id_author  })
        
        setPokemons(pokemons.map(pokemon=>{
          if(pokemon.id === id){
            return {
              ...pokemon,
              id,
              name,
              image,
              attack,
              defense,
              hp,
              type,
              id_author
            }
          }
          return pokemon
        }))
       } catch (error) {
          Swal.fire('No se pudo editar pokemon')
       }
        
        
    }

    const handleDelete = (id)=>{    
        deletePoke(id)
        setPokemons(pokemons.filter(pokemon=>pokemon.id !== id))
    }

    
    const handleSearch = ()=>{
      setSearch(searchInput.current.value)
    }
      
    const filteredPokes = useMemo(()=>
        pokemons.filter((pokemon)=>{
        return pokemon.name.toLowerCase().includes(search.toLowerCase())
        })
    )
     

    return (
        <PokeContext.Provider value={{ filteredPokes, addPokemon, updatePoke, handleDelete, searchInput,handleSearch,search }}>
            { children }
        </PokeContext.Provider>
    );
};

export default PokeProvider;