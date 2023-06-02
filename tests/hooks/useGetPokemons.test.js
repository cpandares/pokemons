import { renderHook, waitFor } from '@testing-library/react';
import useGetPokemons from "../../src/hooks/useGetPokemons";


describe("Test en el custom hook useGetPokemons", ()=>{

    
    test('debe de retornar un arreglo de pokemones segun el idAuthor ', async() => {

        const { result } = renderHook( () => useGetPokemons() );
        
        await waitFor(
            () => expect( result.current.pokemons.length ).toBeGreaterThan(0)
        );
                
        const { pokemons } = result.current;
        
        expect( pokemons.length ).toBeGreaterThan(0);
        

    });


})