import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";


const Header = ({   handleActive }) => {

    const { searchInput,handleSearch, search } = useContext(PokeContext);
    

    return (
        <header className='hero'>
          <p>Listado de Pokemon</p>
           <div className='hero_content'>
               <input 
                    type="text" 
                    placeholder='Buscar' 
                    value={ search }
                    ref = { searchInput }
                    onChange = { handleSearch }
                />
               <button className='hero_button' onClick={ ()=>handleActive(false) }>+ Nuevo</button>            
           </div>
       </header>
    );
};

export default Header;