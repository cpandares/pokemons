
import { render,screen } from "@testing-library/react";

import TablePokemons from '../../src/components/TablePokemons';
import { PokeContext } from '../../src/context/PokeContext';


jest.mock('../../src/hooks/useGetPokemons');

describe("Pruebas en el <TablePokemons />", ()=>{

    test("Debe mostrar un mensaje 'No Existen pokemones', cuando no existan pokemones",()=>{

       const filteredPokes = [];
       render(
        <PokeContext.Provider value={{ filteredPokes }}>
            <TablePokemons />
        </PokeContext.Provider>
       )

       

        expect(screen.getByText('No Existen pokemones')).toBeTruthy();

    })

    test("Debe mostrar una tabla con los pokemones",()=>{
            
            const filteredPokes = [
                {
                    id: 1,
                    name: "Bulbasaur",
                    image: "https://programacion.net/files/article/20170428010447_pokemon.jpg",
                    attack: 49,
                    defense: 49,
                    hp: 45,
                    type: "grass",
                    id_author: 1
                },
                {
                    id: 2,
                    name: "Ivysaur",
                    image: "https://programacion.net/files/article/20170428010447_pokemon.jpg",
                    attack: 62,
                    defense: 63,
                    hp: 60,
                    type: "grass",
                    id_author: 1
                }
            ]
            render(
                <PokeContext.Provider value={{ filteredPokes }}>
                    <TablePokemons />
                </PokeContext.Provider>
            )
    
            expect(screen.getByText('Bulbasaur')).toBeTruthy();
            expect(screen.getByText('Ivysaur')).toBeTruthy();
        }
    )

})