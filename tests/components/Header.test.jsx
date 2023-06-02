import { render,screen, fireEvent } from "@testing-library/react";
import Header from "../../src/components/Header";
import { PokeContext } from "../../src/context/PokeContext";


describe("Pruebas en el <Header />", ()=>{

    test("Debe cambiar el valor de la caja de texto",()=>{

        render( 
        <PokeContext.Provider value={{ filteredPokes:[] }}>
            <Header />
        </PokeContext.Provider> )

      
        const input = screen.getByRole('textbox');

        /* disparo el evento para cambiar el valor del input */

        fireEvent.input( input, { target: { value:'Ivysaur' } } );

        expect( input.value ).toBe("Ivysaur")
            
    });

    test("Se debe llamar a la funcion handleSearch cada vez que se presione una tecla", ()=>{

        const handleSearch = jest.fn();
        render( 
        <PokeContext.Provider value={{ filteredPokes:[] , handleSearch}}>
            <Header />
        </PokeContext.Provider> )

        const input = screen.getByRole('textbox');

        /* disparo el evento para cambiar el valor del input */
        fireEvent.input( input, { target: { value:'Ivysaur' } } );
        expect( handleSearch ).toHaveBeenCalled();

    });

   
    
            
})