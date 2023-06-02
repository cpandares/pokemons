import { render,screen, fireEvent } from "@testing-library/react";

import { PokeContext } from "../../src/context/PokeContext";

import Pokemons from "../../src/views/Pokemons";


describe("Test en el deletePoke", ()=>{

    test("Deberia llamar a la funcion handleDelete cuando se de click al boton", ()=>{

        const handleDelete = jest.fn();

          const pokemon={
            id: 1,
            name: "Bulbasaur",
            type: "grass",
            weight: 6.9,
            height: 0.7,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            };
            
        

        render(
            <PokeContext.Provider value={{ handleDelete }}>
                <Pokemons pokemon={pokemon}/>
            </PokeContext.Provider>
        )
       

        fireEvent.click(screen.getByLabelText("delete"));
        expect(handleDelete).toHaveBeenCalled();
        

    })

    test("Deberia llamar a la funcion handleEdit", ()=>{

        const handleEdit = jest.fn();

          const pokemon={
            id: 1,
            name: "Bulbasaur",
            type: "grass",
            weight: 6.9,
            height: 0.7,
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            };
            
        

        render(
            <PokeContext.Provider value={{ handleEdit }}>
                <Pokemons handleEdit={handleEdit} pokemon= { pokemon }/>
            </PokeContext.Provider>
        )
       

        fireEvent.click(screen.getByLabelText("edit"));
        expect(handleEdit).toHaveBeenCalled();

    })


})