import { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";

const initialState = {
  name: '',
  image: '',
  attack: 0,
  defense: 0,
  idAuthor: 9,
  hp: 0,
  type: 'pokemons'
}

const CardPokemons = () => {

  const { addPokemon } = useContext(PokeContext);
  const [ values, setValues ] = useState(initialState);
  const [ attack, setAttack ] = useState(0);
  const [ defense, setDefense ] = useState(0);
  
  const isValid = values != null && values.name.trim().length > 0;


  const randomHp = Math.floor(Math.random() * 100) + 1;  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let data = {...values, attack, defense, hp: randomHp , type:'Pokemons', idAuthor: 9};
    addPokemon(data);
    setValues(initialState);
  }

  const changeAttack = (e) => {    
    setAttack(e.target.value);
  }
  const changeDefense = (e) => {    
    setDefense(e.target.value);
  }

  const handleReset = ()=>{
   
    setValues(initialState);
    setAttack(0);
    setDefense(0);
  }


    return (
        <form className='card' onSubmit={ handleSubmit }>
          <h2>Nuevo Pokemon</h2>

          <div className='section_actions'>        
          
              <div className="details">
                <label htmlFor="name">Nombre: </label> 
                <input 
                  type="text" 
                  className='input_name' 
                  name="name"  
                  value={ values.name || '' }
                  autoComplete="off"
                  onChange={ e=> setValues({ ...values, name: e.target.value })  }
                  />

                <div className='input_defense'>

                  <label 
                      htmlFor="ataque" >Ataque: </label>
                  0  &nbsp;
                  <input 
                  type="range"    
                  min={0} 
                  max={100} 
                  value={ attack || 0 }
                  name="attack"  
                  autoComplete="off"
                  title={attack}
                  onChange={ changeAttack }
                  /> 100
                </div>
               
              </div>
           
            <div >
                <div className='input_defense'>
                  <label htmlFor="defense" >Defensa: </label>
                  0  &nbsp;
                  <input 
                  type="range"   
                  name="defense" 
                  
                  min={0} 
                  max={100} 
                  value={ defense || 0 }
                  title={defense}
                  onChange={ changeDefense }
                  /> 100
                </div>
                  <label htmlFor="image">Imagen:  </label> 
                  <input 
                  type="url" 
                  value={ values.image || '' }
                  className='input_image'
                  name="image" 
                  onChange={ e=> setValues({ ...values, image: e.target.value }) }/>
                 
            </div>
            
          </div>
          <div className='buttons_actions'>
            {/* Show button if is diabled en una linea*/}
           
            
            <button className={`save_button ${!isValid ? 'disabled' : ''} ` }  type="submit" >Guardar</button>
            <button className='cancel_button' type="button" onClick={ handleReset }>X Cancelar</button>
          </div>
       </form>
    );
};

export default CardPokemons;