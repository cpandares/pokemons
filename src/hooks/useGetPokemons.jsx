import { useEffect, useState } from "react";



const useGetPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch('https://bp-pokemons.herokuapp.com/?idAuthor=9')
        .then(resp => resp.json())
        .then( data => {
            setPokemons(data)
            setError(false)
        } )
        .catch( e => setError(true))
        
    },[])

    return {
        pokemons, setPokemons, error
    }
};

export default useGetPokemons;